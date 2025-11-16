
// ! ============= Normal Code ===============

let toggleIcon = document.getElementById("toggleIcon");
console.log(toggleIcon);

let hidden_content_elements = document.getElementsByClassName("hidden-content");
console.log(hidden_content_elements);

let lines_elements = document.getElementsByClassName("line");
console.log(lines_elements);

toggleIcon.addEventListener("click", () => {
  console.log("clicked");

  for (let element of hidden_content_elements) {
    console.log(element);

    element.classList.toggle("displayNone");
  }

  for (let line of lines_elements) {
    console.log(line);

    line.classList.toggle("displayNone");
  }
});

// ! ============= API Integration Code ===============

// let old_api_key = "AIzaSyDP7yeX9S45Tup4w7wLvnkSNdbxr0eqYBk";
let api_key = "AIzaSyBGx08tnYZ4Bd4n8sjIVDMqc4Fij8mwyEY";
let search_http = "https://www.googleapis.com/youtube/v3/search?";
let channel_http = "https://www.googleapis.com/youtube/v3/channels?";

// Function to perform the search
const searchYouTube = query => {
  let searchParams = new URLSearchParams({
    key: api_key,
    part: "snippet",
    type: "video",
    q: query, // Use the user-defined search query
    maxResults: 3, // Adjust max results if needed
    regionCode: "IN",
  });

  fetch(search_http + searchParams)
    .then(res => res.json())
    .then(data => {
      if (data.items.length > 0) {
        data.items.forEach(item => {
          getChannelIcon(item);
        });
      } else {
        console.log("No results found.");
      }
    })
    .catch(err => console.log("Error fetching video data:", err));
};

// Function to get the channel icon
const getChannelIcon = video_data => {
  let channelParams = new URLSearchParams({
    key: api_key,
    part: "snippet",
    id: video_data.snippet.channelId,
  });

  fetch(channel_http + channelParams)
    .then(res => res.json())
    .then(data => {
      if (data.items.length > 0) {
        console.log(video_data);
        video_data.channelThumbnail =
          data.items[0].snippet.thumbnails.default.url;
        displayVideoData(video_data);
      } else {
        console.log("Channel data not found.");
      }
    })
    .catch(err => console.log("Error fetching channel data:", err));
};

// Function to display video data
let videos_container = document.getElementById("videos_container");
console.log(videos_container);

const displayVideoData = video_data => {
  // console.log("============== Video Data =========");
  // console.log("Video Thumbnail:", video_data.snippet.thumbnails.high.url);
  // console.log("Channel Thumbnail:", video_data.channelThumbnail);
  // console.log("Channel Title:", video_data.snippet.channelTitle);
  // console.log(
  //   "Video URL:",
  //   `https://youtube.com/watch?v=${video_data.id.videoId}`
  // );

  videos_container.innerHTML += `
  <a href="https://youtube.com/watch?v=${video_data.id.videoId}" target="_blank">
    <main class="videoBox">
          <div class="thumbnail">
            <img class="thumbnail_img" src=${video_data.snippet.thumbnails.high.url} alt="" />
          </div>
          <div class="content">
            <div class="logo">
              <img src="${video_data.channelThumbnail}" alt="">
            </div>
            <div>
              <h3>${video_data.snippet.title.slice(0,50)}... more</h3>
              <h5>${video_data.snippet.channelTitle}</h5>
              <h5>Views . days ago</h5>
            </div>
          </div>
        </main>
    </a>
    `;
};

// Example user-defined search query
let userQuery = "pallavi songs";

let user_input = document.getElementById("user_input");
console.log(user_input);

user_input.addEventListener("change", () => {
  userQuery = user_input.value;
});

// Replace with user input
searchYouTube(userQuery);
