import { randomNumber } from './util.js'

let objects = []

let userComments = [ 'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!']

let userName = ['Артем', 'Максим', 'Александр', 'Павел', 'Юлия', 'Игорь', 'Вероника', 'Полина', 'Евгения']

let generationComment = function (){
  let comment = []
  let numberComment = randomNumber(1,4)
  for (let i = 0; i <= numberComment; i++){
    let comments = {
      id: i + 1,
      avatar: ('img/avatar-' + randomNumber (1, 6) + '.svg'),
      message: userComments[randomNumber(1,6)-1],
      user: userName[randomNumber(1,9)-1],
    }
    comment.push(comments)
  }
  return comment
}

let generationObjects = function (){
  for (let i=0; i <= 24; i++){
    let obj = {
      id: i + 1,
      url: ('photos/' + (i + 1) + '.jpg'),
      description: ('Описание'),
      likes: randomNumber (15, 200),
      comments: generationComment(),
    }
    objects.push(obj)
  }
}

const data = generationObjects();

export {data}


