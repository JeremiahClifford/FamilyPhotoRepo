let pages: string[] = []

const createButton = async (buttonNum: number, comments: string, img: string): Promise<string[]> => {
    let commentsFile = await import(comments)

    let componentsOut: string[] = []

    let buttonOut: string = `<button id="button${buttonNum}"><img src="${await import(img)}" alt="image"></button>`
    componentsOut.push(buttonOut)

    let pageOut: string = `
    <div class="page">
        <img src="${img}" alt="image">
        <div class="commentsSections">`

    for (let i: number = 0; i < commentsFile.comments.length; i++) {
        pageOut += `
        <h3>${commentsFile.comments[i].User}</h3>
        <p>${commentsFile.comments[i].Text}</p>
        `
    }

    pageOut += `
        </div>
    </div>`
    componentsOut.push(pageOut)

    return componentsOut
}

const loopThroughImages = async (numImages: number): Promise<string[][]> => {
    let componentsList: string[][] = []

    let buttons: string[] = []
    let pages: string[] = []

    for (let i: number = 1; i < numImages; i++) {
        let commentsFilePath = `./Data/${i}/comments.json`
        let imageFilePath = `./Data/${i}/img.jpg`

        let components = await createButton(i, commentsFilePath, imageFilePath)

        buttons.push(components[0])
        pages.push(components[1])
    }

    componentsList.push(buttons)
    componentsList.push(pages)

    return componentsList
}

const fillInButtons = async (numImages: number): Promise<string[]> => {    
    let componentsList: string[][] = await loopThroughImages(numImages)

    let buttons = componentsList[0]
    let pages = componentsList[1]

    let photoButtonArea: HTMLElement = document.getElementById('photo-button-area') as HTMLElement

    for (let i: number = 0; i < buttons.length; i++) {
        photoButtonArea.innerHTML += buttons[i]
    }

    return pages
}

const ShowPage = (index: number): void => {
    // TODO:
}

const main = async (): Promise<void> => {

    const numImages: number = (await import("./Data/settings.json")).numImages

    pages = await fillInButtons(numImages)

    for (let i: number = 1; i < numImages; i++) {
        let button: HTMLButtonElement = document.getElementById(`button${i}`) as HTMLButtonElement
        button.addEventListener("click", () => ShowPage(i))
    }
}

main()