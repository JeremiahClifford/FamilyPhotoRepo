const numImages = 3 // this has to be manually set when restarting the site to include all images

const CreateButton = (sourcePath: string): string => {
    let retButton = `<button><img src="${sourcePath}" alt ="image"></button>`
    return retButton
}

let buttonArea: HTMLElement = document.getElementById('photo-button-area') as HTMLElement

const PopulateButtons = (): void => {
    for (let i: number = 1; i <= numImages; i++) {
        buttonArea.innerHTML += CreateButton(`Images/${i}.jpg`)
    }
}

PopulateButtons()