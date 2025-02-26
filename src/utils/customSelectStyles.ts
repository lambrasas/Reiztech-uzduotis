export const getCustomSelectStyles = (theme: 'light' | 'dark') => ({
  control: (provided: any) => ({
    ...provided,
    backgroundColor: theme === 'dark' ? '#2b2a32' : '#ffffff',
    border: '1px solid var(--border-color)',
    color: theme === 'dark' ? '#e0e0e0' : '#000000',
  }),
  menu: (provided: any) => ({
    ...provided,
    backgroundColor: theme === 'dark' ? '#2b2a32' : '#ffffff',
    color: theme === 'dark' ? '#e0e0e0' : '#000000',
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isFocused
      ? theme === 'dark'
        ? '#757575'
        : '#f0f0f0'
      : theme === 'dark'
      ? '#2b2a32'
      : '#ffffff',
    color: theme === 'dark' ? '#e0e0e0' : '#000000',
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: theme === 'dark' ? '#e0e0e0' : '#000000',
  }),
  valueContainer: (provided: any) => ({
    ...provided,
    justifyContent: 'left',
    padding: '0 20px',
  }),
  placeholder: (provided: any) => ({
    ...provided,
    opacity: 1,
    color: theme === 'dark' ? '#e0e0e0' : '#000000',
  }),
})
