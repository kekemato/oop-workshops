document.body.innerHTML = '<ul>'

fetch('https://randomuser.me/api/?results=10')
    .then(response => response.json())
    .then(data => data.results.forEach((e) => document.body.innerHTML += `<li>${e.name.first}</li>`))
    .catch(error => console.log('ERROR!', error))

document.body.innerHTML += '</ul>'