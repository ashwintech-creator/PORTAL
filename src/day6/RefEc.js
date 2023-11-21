export default class RefEc extends Component {
  myRef=React.createRef(); T
  
  handleChange=(e)=>{
  e.preventDefault();
  const val=this.myRef.current.value;
  console. log(val);
  
  }
  
  render() {
  return (
  <div>
  
  <form onSubmit={this .handleChange}>
  <input type="text" ref={this.myRef}></input>
  <button type="submit" >Submit</button>
  </form>
  </div>
  )}}