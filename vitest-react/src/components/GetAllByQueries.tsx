function GetAllByQueries() {
  return (
    <div>
      <label htmlFor='input1'>Label for Input 1</label>
      <input
        type='text'
        placeholder='Enter text here'
        id='input1'
        value='Default Value'
        disabled
      />

      <label htmlFor='input2'>Label for Input 2</label>
      <input
        type='text'
        placeholder='Another Placeholder'
        id='input2'
        value='Another Value'
        disabled
      />

      <input
        type='text'
        placeholder='Enter Something...'
        disabled
      />
      <input
        type='text'
        placeholder='Enter Something else ...'
        disabled
      />

      <p>This is a paragraph with some text content.</p>
      <p>This is a paragraph with some text content.</p>

      <input
        type='text'
        value='Some display value'
        disabled
      />
      <input
        type='text'
        value='Another display value'
      />

      <img
        src='image1.png'
        alt='A simple image'
      />
      <img
        src='image2.png'
        alt='Another simple image'
      />

      <div title='This is a div with title attribute'>Div content with title attribute</div>
      <div title='Another div with title attribute'>Another div content</div>

      <button
        role='button'
        aria-label='This is a button'
      >
        Disabled Button 1
      </button>
      <button
        role='button'
        aria-label='This is a button 2'
      >
        Disabled Button 2
      </button>

      <div data-testid='custom-test-id-1'>This div has test id 1.</div>
      <div data-testid='custom-test-id-2'>This div has test id 2.</div>
    </div>
  )
}

export default GetAllByQueries
