 const APIURL = 'https://api.github.com/users/'
const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')
async function getUser(username) {
try {
const { data } = await axios(APIURL + username)
createUserCard(data)
getRepos(username)
} catch(err) {
if(err.response.status == 404) {
createErrorCard('No profile with this username')
}
}
}
async function getRepos(username) {
try {
const { data } = await axios(APIURL + username + '/repos?sort=created')
addReposToCard(data)
} catch(err) {
createErrorCard('Problem fetching repos')
}
}
function createUserCard(user) {
const userID = user.name || user.login
const userBio = user.bio ? `<p>${user.bio}</p>` : ''
const cardHTML = `
<div class="card bg-black text-white p-10 mt-36 flex">
<div >
<img src="${user.avatar_url}" alt="${user.name}" class="avatar w-52 ">
</div>
<div class="user-info text-center ml-20">
<h2 class="text-4xl bg-white px-3 py-3 text-black rounded-2xl">${userID}</h2>
${userBio}
<ul>
<li class="mt-5 text-xl">${user.followers} <strong>Followers</strong></li>
<li class="mt-5 text-xl">${user.following} <strong>Following</strong></li>
<li class="mt-5 text-xl">${user.public_repos} <strong>Repos</strong></li>
</ul>
<div id="repos" class="mt-5 text-xl"></div>
</div>
</div>
`
main.innerHTML = cardHTML
}
function createErrorCard(msg) {
const cardHTML = `
<div class="card">
<h1>${msg}</h1>
</div>
`
main.innerHTML = cardHTML
}
function addReposToCard(repos) {
const reposEl = document.getElementById('repos')
repos
.slice(0, 1)
.forEach(repo => {
const repoEl = document.createElement('a')
repoEl.classList.add('repo')
repoEl.href = repo.html_url
repoEl.target = '_blank'
repoEl.innerText = repo.name
reposEl.appendChild(repoEl)
})
}
form.addEventListener('submit', (e) => {
e.preventDefault()
const user = search.value
if(user) {
getUser(user)
search.value = ''
}
})
