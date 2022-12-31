const projects = [{
    title: 'Chest exercise video',
    category: 'chest',
    link: 'https://www.youtube.com/watch?v=lWXhih3xbVc&feature=youtu.be',
    image: 'background.jpeg.chestttt.jpg'
},{
    title: 'bacl exercise video',
    category: 'back',
    link: 'https://www.youtube.com/watch?v=s8taXR3mYa8&feature=youtu.be',
    image: 'background.jpeg.dorso.webp'
},{
    title: 'shoulder exercise video',
    category: 'shoulder',
    link: 'https://www.youtube.com/watch?v=mUbnnR9ClJk',
    image: 'background.jpeg.soulder.jfif'
},{
    title: 'triceps exercise video',
    category: 'triceps',
    link: 'https://www.youtube.com/watch?v=dhGnHk_d6vc',
    image: 'background.jpeg.triceps.webp'
},{
    title: 'biceps exercise video',
    category: 'biceps',
    link: 'https://www.youtube.com/watch?v=LHBINS08Yy0',
    image: 'background.jpeg.biceps.webp'
},{
    title: 'legs exercise video',
    category: 'legs',
    link: 'https://www.youtube.com/watch?v=Nr0voKyfiiE',
    image: 'background.jpeg.legsssss.jpg'
}]

const projectsContainer = document.querySelector('#projects .content')

projects.forEach(project => {
    const projectCard = document.createElement('div')
    const projectImageContainer = document.createElement('div')
    const image = document.createElement('img')
    const projectInfo = document.createElement('div')
    const projectCategory = document.createElement('p')
    const projectTitleContainer = document.createElement('div')
    const projectTitle = document.createElement('span')
    const link = document.createElement('a')

    projectCard.classList.add('project-card')
    projectImageContainer.classList.add('project-image')
    projectInfo.classList.add('project-info')
    projectCategory.classList.add('project-category')
    projectTitleContainer.classList.add('project-title')
    link.classList.add('more-details')

    image.src = `images/${project.image}`
    projectCategory.innerText = project.title
    projectTitle.innerText = project.category
    link.href = project.link
    link.innerText = 'more-details'
    link.target= '_blank'

    projectImageContainer.append(image)
    projectCard.append(projectImageContainer)
    projectInfo.append(projectCategory)
    projectTitleContainer.append(projectTitle)
    projectTitleContainer.append(link)
    projectInfo.append(projectTitleContainer)
    projectCard.append(projectInfo)
    projectsContainer.append(projectCard)
})