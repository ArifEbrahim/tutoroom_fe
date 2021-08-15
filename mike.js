componentDidMount() {
  const config = {

    headers: {
    Authorization: 'Bearer' + localStorage.getItem('token')
    }
  }
    
    axios.get('user', config).then(
      res => { console. log(res) }
      .catch {  err => { console.log(err) }
    )
    
  }
}
