export default function getData() {
  const data = [
    {
      header: 'Заголовок 1',
      options: ['элемент списка 1', 'элемент списка 2', 'элемент списка 3', 'элемент списка 4', 'элемент списка 5', 'элемент списка 6'],
      text: 'какой-то текст 1 текст какой-то 1 какой-то текст 1 какой-то текст 1 какой-то текст 1 какой-то текст 1',
    },
    {
      header: 'Заголовок 2',
      options: ['элемент списка 1', 'элемент списка 2', 'элемент списка 3', 'элемент списка 4', 'элемент списка 5'],
      text: 'какой-то текст 2 текст какой-то 2 какой-то текст 2 какой-то текст 2 какой-то текст 2',
    },
    {
      header: 'Заголовок 3',
      options: ['элемент списка 1', 'элемент списка 2', 'элемент списка 3', 'элемент списка 4'],
      text: 'какой-то текст 3 текст какой-то 3 какой-то какой-то текст 3 текст какой-то 3 какой-то текст 3',
    },
  ];
  return new Promise((resolve) => {
    resolve(data);
  });
}
