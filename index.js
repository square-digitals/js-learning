const fetchUser = async () => {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let post = await response.json()
    console.log(post)
  } catch (error) {
    console.error('Error fetching user', error)
  }
}

fetchUser()
