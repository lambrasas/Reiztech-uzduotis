import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Show } from '../types/show'
import { fetchShowById } from '../api/api'
import DetailedShowComponent from '../components/DetailedShowComponent'

const IndividualShowPage = () => {
  const { id } = useParams<{ id: string }>()
  const [show, setShow] = useState<Show | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')
  useEffect(() => {
    const getShow = async () => {
      if (!id) return
      try {
        setIsLoading(true)
        const data = await fetchShowById(Number(id))
        setShow(data)
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message)
        }
      } finally {
        setIsLoading(false)
      }
    }
    getShow()
  }, [id])
  if (isLoading) return <div>Be patient while loading...</div>
  if (error) return <div>There has been an error: {error}</div>
  if (!show) return <div>This show was not found</div>
  return <DetailedShowComponent show={show} />
}

export default IndividualShowPage
