let workContainer = document.getElementById("work-container");

let icons = {
  get python() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${this.size}" height="${this.size}" fill="currentColor" class="bi bi-filetype-py" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2H7v-1h5a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM0 11.85h1.6c.289 0 .533.06.732.179.201.117.355.276.46.477.105.201.158.427.158.677 0 .25-.054.476-.16.677-.106.199-.26.357-.464.474a1.452 1.452 0 0 1-.732.173H.79v1.342H0V11.85Zm2.06 1.714a.795.795 0 0 0 .085-.381c0-.227-.062-.4-.185-.521-.123-.122-.294-.182-.513-.182H.788v1.406h.66a.794.794 0 0 0 .374-.082.574.574 0 0 0 .238-.24Zm2.963.75v1.535H4.23v-1.52L2.89 11.85h.876l.853 1.696h.032l.856-1.696h.855l-1.339 2.464Z"/>
  </svg>`;
  },
  get html() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${this.size}" height="${this.size}" fill="currentColor" class="bi bi-filetype-html" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14 4.5V11h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5Zm-9.736 7.35v3.999h-.791v-1.714H1.79v1.714H1V11.85h.791v1.626h1.682V11.85h.79Zm2.251.662v3.337h-.794v-3.337H4.588v-.662h3.064v.662H6.515Zm2.176 3.337v-2.66h.038l.952 2.159h.516l.946-2.16h.038v2.661h.715V11.85h-.8l-1.14 2.596H9.93L8.79 11.85h-.805v3.999h.706Zm4.71-.674h1.696v.674H12.61V11.85h.79v3.325Z"/>
</svg>`;
  },
  get javascript() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${this.size}" height="${this.size}" fill="currentColor" class="bi bi-filetype-js" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2H8v-1h4a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM3.186 15.29a1.176 1.176 0 0 1-.111-.449h.765a.578.578 0 0 0 .255.384c.07.049.153.087.249.114.095.028.202.041.319.041.164 0 .302-.023.413-.07a.559.559 0 0 0 .255-.193.507.507 0 0 0 .085-.29.387.387 0 0 0-.153-.326c-.101-.08-.255-.144-.462-.193l-.619-.143a1.72 1.72 0 0 1-.539-.214 1.001 1.001 0 0 1-.351-.367 1.068 1.068 0 0 1-.123-.524c0-.244.063-.457.19-.639.127-.181.303-.322.528-.422.224-.1.483-.149.776-.149.305 0 .564.05.78.152.216.102.383.239.5.41.12.17.186.359.2.566h-.75a.56.56 0 0 0-.12-.258.624.624 0 0 0-.247-.181.923.923 0 0 0-.369-.068c-.217 0-.388.05-.513.152a.472.472 0 0 0-.184.384c0 .121.048.22.143.3a.97.97 0 0 0 .405.175l.62.143c.218.05.406.12.566.211.16.09.285.21.375.358.09.148.135.335.135.56 0 .247-.063.466-.188.656a1.216 1.216 0 0 1-.539.439c-.234.105-.52.158-.858.158-.254 0-.476-.03-.665-.09a1.404 1.404 0 0 1-.478-.252 1.13 1.13 0 0 1-.29-.375Zm-3.104-.033A1.32 1.32 0 0 1 0 14.791h.765a.576.576 0 0 0 .073.27.499.499 0 0 0 .454.246c.19 0 .33-.055.422-.164.092-.11.138-.265.138-.466v-2.745h.79v2.725c0 .44-.119.774-.357 1.005-.236.23-.564.345-.984.345a1.59 1.59 0 0 1-.569-.094 1.145 1.145 0 0 1-.407-.266 1.14 1.14 0 0 1-.243-.39Z"/>
        </svg>`;
  },
  size: 150,
};

let workItems = [
  {
    name: "Selenium Gigs",
    gitUrl: "https://github.com/DAM-96/SeleniumGigs_Py",
    icon: icons.python,
  },
  {
    name: "Python Code Samples",
    gitUrl: "https://github.com/DAM-96/Python-CodeSamples",
    icon: icons.python,
  },
  {
    name: "NOC QA Automation Framework",
    gitUrl: "https://github.com/DAM-96/NOC_pyFW",
    icon: icons.python,
  },
  {
    name: "Dummy Company sample site",
    gitUrl: "https://github.com/DAM-96/horiseon-solution-services-site",
    icon: icons.html,
  },
  {
    name: "The WebDev Cool Quiz",
    gitUrl: "https://github.com/DAM-96/the-webdev-cool-quiz",
    icon: icons.javascript,
  },
  {
    name: "The Weather App",
    gitUrl: "https://dam-96.github.io/the-weather-app/",
    icon: icons.javascript,
  },
];

function runApp() {
  renderWorkItems();
}

function renderWorkItems() {
  for (let i = 0; i < workItems.length; i++) {
    let tempAnchor = document.createElement("a");
    let tempDiv = document.createElement("div");
    let tempH4 = document.createElement("h4");

    tempAnchor.classList.add("work-section");
    tempAnchor.href = workItems[i].gitUrl;
    tempAnchor.target = "_blank";

    if (!workItems[i].icon) workItems[i].icon = "";
    if (workItems[i].icon == "") workItems[i].icon = icons.html;

    tempDiv.innerHTML = workItems[i].icon;

    let tempH4TextNode = document.createTextNode(workItems[i].name);

    tempH4.appendChild(tempH4TextNode);

    tempAnchor.appendChild(tempDiv);
    tempAnchor.appendChild(tempH4);

    workContainer.appendChild(tempAnchor);
  }
}

runApp();
