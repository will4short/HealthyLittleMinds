# Healthy Little Minds Audiobook Reader

Use `audiobook.html` for every book. The reader loads a JSON file from the `book` query parameter:

```text
audiobook.html?book=audiobooks/ella/book.json
```

## Folder Structure

```text
audiobooks/
  ella/
    book.json
    page01.jpg
    page01.mp3
    page02.jpg
    page02.mp3
    ...
    page16.jpg
    page16.mp3
```

## JSON Structure

```json
{
  "title": "One More Kick, Ella!",
  "series": "Healthy Little Minds Audiobook",
  "description": "Short description shown in the reader.",
  "language": "en",
  "cover": "coverpage.jpg",
  "backgroundMusic": "music.mp3",
  "backgroundMusicVolume": 0.14,
  "pages": [
    {
      "image": "page01.jpg",
      "audio": "page01.mp3",
      "text": "Story text here.",
      "alt": "Optional illustration description.",
      "caption": "Optional visible image caption.",
      "timings": [
        { "start": 0, "end": 2.4, "text": "Story text here." }
      ],
      "textByLanguage": {
        "en": "Story text here.",
        "zh-CN": "Translated story text here."
      }
    }
  ]
}
```

## Add A New Book

1. Create a new folder inside `audiobooks/`, for example `audiobooks/princess/`.
2. Add the 16 JPG illustrations and 16 MP3 narration files.
3. Copy `audiobooks/ella/book.json` into the new folder.
4. Update the title, description, page text, image filenames, and audio filenames.
5. Open it with `audiobook.html?book=audiobooks/princess/book.json`.

## Future-Ready Fields

- `timings`: sentence or word-level read-along highlighting.
- `textByLanguage`: multiple language support.
- `backgroundMusic`: optional music bed behind narration.
- `caption` and `alt`: better accessibility and page context.
