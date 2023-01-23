const searchForm = document.querySelector("#github-form")
searchForm.addEventListener("submit", getUser)

function handleSubmit(e) {
  e.preventDefault()
  let userObj = {
    login: e.target.name.value,
    image: e.target.image.value,
    likes: 0
  }
  renderOneToy(toyObj)
  postToy(toyObj)
}

function renderUser(user) {
    let card = document.createElement("div")
    card.className = "card"
    card.innerHTML = `
    <h2>${user.login}</h2>
    <img src="${user.avatar_url}/>
    <p>${user.html_url}</p>
    `
    document.querySelector("#github-container").appendChild(card)
}


const search = document.querySelector("#search")
function getUser(e) {
    e.preventDefault()
    fetch (`https://api.github.com/search/users?q=${search.value}`)
    .then(resp => resp.json())
    .then(user => renderUser(user))
}
