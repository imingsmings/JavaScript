function List({ data }: { data: string[] }) {
  if (data.length === 0) {
    return <div>No Data</div>
  }

  return (
    <div>
      <ul>
        {data.map((item) => {
          return <li key={item}>{item}</li>
        })}
      </ul>
    </div>
  )
}

export default List
