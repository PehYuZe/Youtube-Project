//console.log(data[0]);

const container = document.querySelector('.video-layout-css');
let html = ``;

data.forEach((videoData) => {
    html = `
    <div class="video-box-css">
        <div style="position: relative;">
            <img class="thumbnail-css" src="${videoData.thumbnail}">
            <div class="video-time-css">${videoData.videoTime}</div>
        </div>
        <div class="video-info-css">
            <img class="channel-pic-css" src="${videoData.channelPic}">
            <div class="video-stats-css">
                <div class="video-title-css">${videoData.videoTitle}</div>
                <div class="video-author-css">${videoData.videoAuthor}</div>
                <div class="video-views-css">${videoData.views}</div>
            </div>
        </div>
    </div>`;

    container.innerHTML = container.innerHTML + html;
})

container.innerHTML = container.innerHTML + '<div style="margin-top: 500px;">How did u find me?</div>';

//console.log(html);