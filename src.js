"use strict";
const numImages = JSON.parse("./Data/settings.json").numImages;
const createButton = (comments, img) => {
    let commentsFile = JSON.parse(comments);
    let componentsOut = [];
    let buttonOut = `<button><img src="${img}" alt="image"></button>`;
    componentsOut.push(buttonOut);
    let pageOut = `
    <div class="page">
        <img src="${img}" alt="image">
        <div class="commentsSections">`;
    for (let i = 0; i < commentsFile.comments.length; i++) {
        pageOut += `
        <h3>${commentsFile.comments[i].User}</h3>
        <p>${commentsFile.comments[i].Text}</p>
        `;
    }
    pageOut += `
        </div>
    </div>`;
    componentsOut.push(pageOut);
    return componentsOut;
};
const loopThroughImages = () => {
    let componentsList = [];
    let buttons = [];
    let pages = [];
    for (let i = 1; i < numImages; i++) {
        let commentsFilePath = `./Data/${i}/comments.json`;
        let imageFilePath = `./Data/${i}/img.jpg`;
        buttons.push(createButton(commentsFilePath, imageFilePath)[0]);
        pages.push(createButton(commentsFilePath, imageFilePath)[1]);
    }
    componentsList.push(buttons);
    componentsList.push(pages);
    return componentsList;
};
const fillInButtons = () => {
    let componentsList = loopThroughImages();
    let buttons = componentsList[0];
    let pages = componentsList[1];
    let photoButtonArea = document.getElementById('photo-button-area');
    for (let i = 0; i < buttons.length; i++) {
        photoButtonArea.innerHTML += buttons[i];
    }
};
fillInButtons();
//# sourceMappingURL=src.js.map