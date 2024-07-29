export default function TodoList({ children, isChecked} ){
  return (
  <>

  <label htmlFor="pinkin"> 
  <input id = "pinkin" type="checkbox" defaultChecked={isChecked} />
  { children } 
  </label>
  <br/>
  </>
  )

}