const posts = [ {
    name: "Do'er",
    username: "@du_doer",
    date: "2025年6月9日",
    text: "今日は少しだけ進んだ",
    avatar: "images/doer-icon.jpg",
    replies: "3",
    reposts: "12",
    likes: "86",
    engagements: "1,204",
  },
  {
    name: "nana",
    username: "@nana_work",
    date: "2025年6月10日",
    text: "朝のうちに細かいところを片づけたい",
    avatar: "images/doer-icon.jpg",
    replies: "1",
    reposts: "5",
    likes: "42",
    engagements: "689",
  },
  {
    name: "sato",
    username: "@sato_notes",
    date: "2025年6月11日",
    text: "メモを残しておくと、翌日の自分が助かる",
    avatar: "images/doer-icon.jpg",
    replies: "4",
    reposts: "18",
    likes: "131",
    engagements: "2,048",
  },
  {
    name: "mika",
    username: "@mika_room",
    date: "2025年6月12日",
    text: "窓を開けたらちょうどいい風が入ってきた",
    avatar: "images/doer-icon.jpg",
    replies: "2",
    reposts: "7",
    likes: "58",
    engagements: "932",
  },
  {
    name: "kei",
    username: "@kei_dev",
    date: "2025年6月13日",
    text: "昼前に一区切りつけられたのでよかった",
    avatar: "images/doer-icon.jpg",
    replies: "5",
    reposts: "21",
    likes: "174",
    engagements: "3,120",
  },
  {
    name: "aya",
    username: "@aya_log",
    date: "2025年6月14日",
    text: "あとで見返す用に、気づいたことだけ書いておく",
    avatar: "images/doer-icon.jpg",
    replies: "0",
    reposts: "3",
    likes: "29",
    engagements: "511",
  },
  {
    name: "ren",
    username: "@ren_daily",
    date: "2025年6月15日",
    text: "雨の日は作業用BGMを少し静かめにしている",
    avatar: "images/doer-icon.jpg",
    replies: "6",
    reposts: "14",
    likes: "97",
    engagements: "1,783",
  },
  {
    name: "yui",
    username: "@yui_clip",
    date: "2025年6月16日",
    text: "小さく直したところほど、あとで効いてくる気がする",
    avatar: "images/doer-icon.jpg",
    replies: "3",
    reposts: "9",
    likes: "76",
    engagements: "1,306",
  },
];

const actionIcons = [
  { src: "images/reply.svg", countKey: "replies" },
  { src: "images/repost.svg", countKey: "reposts" },
  { src: "images/like.svg", countKey: "likes" },
  { src: "images/engagement.svg", countKey: "engagements" },
];

function createImage(src, className) {
  const image = document.createElement("img");
  image.src = src;
  image.alt = "";

  if (className) {
    image.className = className;
  }

  return image;
}

function createTextElement(tagName, className, text) {
  const element = document.createElement(tagName);
  element.className = className;
  element.textContent = text;
  return element;
}

function createAction(post, icon) {
  const action = document.createElement("div");
  action.className = "action";

  action.appendChild(createImage(icon.src));
  action.appendChild(createTextElement("span", "", post[icon.countKey]));

  return action;
}

function createPost(post) {
  const postElement = document.createElement("div");
  postElement.className = "post";

  const avatarArea = document.createElement("div");
  avatarArea.className = "avatar-area";
  avatarArea.appendChild(createImage(post.avatar, "avatar"));

  const content = document.createElement("div");
  content.className = "content";

  const header = document.createElement("div");
  header.className = "header";

  const meta = document.createElement("div");
  meta.className = "meta";
  meta.appendChild(createTextElement("span", "name", post.name));
  meta.appendChild(createTextElement("span", "username", post.username));
  meta.appendChild(createTextElement("span", "date", post.date));

  header.appendChild(meta);
  header.appendChild(createImage("images/details.svg", "details-icon"));

  const text = createTextElement("div", "text", post.text);

  const actions = document.createElement("div");
  actions.className = "actions";

  actionIcons.forEach((icon) => {
    actions.appendChild(createAction(post, icon));
  });

  const spacer = document.createElement("div");
  spacer.className = "spacer";
  actions.appendChild(spacer);
  actions.appendChild(createImage("images/bookmark.svg", "icon-only"));
  actions.appendChild(createImage("images/share.svg", "icon-only"));

  content.appendChild(header);
  content.appendChild(text);
  content.appendChild(actions);

  postElement.appendChild(avatarArea);
  postElement.appendChild(content);

  return postElement;
}

const timeline = document.querySelector("#timeline");

posts.forEach((post) => {
  timeline.appendChild(createPost(post));
});
