const issueCount = document.getElementById('issue-counter')

const spinner = (status)=>{
    const spinner = document.getElementById('spinner')
    const cardContainer = document.getElementById('card-container')
    if(status === true){
        spinner.classList.remove('hidden')
        cardContainer.classList.add('hidden')
    }else{
        spinner.classList.add('hidden')
        cardContainer.classList.remove('hidden')
    }
}

const loadSearch = () =>{
    spinner(true)
    const searchInput = document.getElementById('search-input')
    const searchValue = searchInput?.value.toLowerCase().trim() || ''

    if (!searchValue) {
        loadAllIssues()
        return
    }

    const url = `https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${encodeURIComponent(
        searchValue
    )}`

    fetch(url)
        .then(res => res.json())
        .then(issue => {
            displayAllIssues(issue.data)
            issueCount.innerText = issue.data.length
        })
        .catch((err) => {
            console.error('Search request failed', err)
            spinner(false)
        })
}

const initSearch = () => {
    const searchInput = document.getElementById('search-input')
    if (!searchInput) return

    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            loadSearch()
        }
    })
}

const loadAllIssues = ()=>{
    spinner(true)
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues"
    fetch(url)
    .then(res => res.json())
    .then(issues => {
        displayAllIssues(issues.data)
        issueCount.innerText = issues.data.length 
    })
}
const loadDataForOpen = ()=>{
    spinner(true)
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues"
    fetch(url)
    .then(res => res.json())
    .then(issues => {
        dataForOpen(issues.data) 
    })
}
const loadDataForClosed = ()=>{
    spinner(true)
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues"
    fetch(url)
    .then(res => res.json())
    .then(issues => {
        dataForClosed(issues.data) 
    })
}

const loadSingleIssue = (id) =>{
    spinner(true)
    const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`
    fetch(url)
    .then(res => res.json())
    .then(issue => {
        displaySingleIssue(issue.data)
    })
    
}

