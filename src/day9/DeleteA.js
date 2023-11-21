function DeleteAxios() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  
  const handleIdChange =
  
   
  
  event => {  setId(event.target.value); };
  
  const handleNameChange = event => { setName(event.target. value); };
  const handleSubmit = event => { event. preventDefault(); };
  axios.put('http://localhost:301/users/${id}’, { name })
  -then(res => {
  console. 1log(res)
  console. log(res.data);
  »
  -catch(error => {
  console.error('Error updating person:', error);
  
  v3
  
   
  
  3
  | return (
  <div>
  <form onSubmit={handleSubmit}>
  <label>
  Person ID:
  <input type=*numble nane="i
  </label>
  <label>
  New Name:
  
   
  
  3
  
  alue={id} onChange={handleIdchange} />
  
  <input type="text” names"name" values(name} onChange=(handleNameChange) />
  
  </label>
  | dhectibee: tram
  
   
  
  ee a
  