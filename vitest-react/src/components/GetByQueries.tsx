function GetByQueries() {
  return (
    <div>
      <h1>Component</h1>
      <button aria-label='submit'>Submit</button>
      <button id='cancel-button'>Cancel</button>
      <input
        type='text'
        placeholder='Enter Text'
      />
      <a
        href='https://example.com'
        target='_blank'
        referrerPolicy='no-referrer'
      >
        Visit Example
      </a>
      <div data-testid='custom-element'>Custom Element</div>
    </div>
  )
}

export default GetByQueries
