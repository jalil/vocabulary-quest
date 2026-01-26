---
name: Book Ingestion Skill
description: Instructions for extracting content from raw book text into the application's data structure.
---

# Book Ingestion Skill

This skill provides a standard operating procedure for converting raw text from vocabulary books (Grade 4-10) into the application's TypeScript data format.

## Relevant Files
- **Input Example**: `skills/book_ingestion/examples/input.txt`
- **Output Example**: `skills/book_ingestion/examples/output.ts`
- **Target Data Schema**: `lib/types.ts`

## Process Overview

1.  **Acquire Content**:
    *   **Text Files**: Look for raw text files in `text/` (e.g., `text/book_4_lesson_20.txt`).
    *   **Images**: If only images exist (e.g., `text/-106_1.jpg`), use the `view_file` tool to "read" the image. You must **transcribe** the text from the image into the Raw Text patterns below before or during the conversion process.
2.  **Analyze Structure**: Identify the four main components: Word List, Exercises, Reading Passage, and Fun & Fascinating FACTS.
3.  **Convert to TypeScript**: Use the patterns below to generate the `data.ts` file.

## Text Extraction Patterns

### 1. Vocabulary List

**Input Pattern:**
```text
word
(pos.) Definition.
(pos2.) Definition 2.
Example sentence.
```

**Output Logic:**
- **ID**: lowercase word.
- **Word**: original word.
- **Definition**: Concatenate all parts of speech and definitions.
- **Example Sentence**: The final line.
- **Emoji**: Pick a relevant emoji manually or using a tool.
- **Category**: "Grade [X]"

### 2. Exercises (Stories)

Exercises are treated as `Story` objects with `type: "exercise"`.

**Common Types:**
- **Finding Meanings**: Choose two phrases (e.g., "c-a").
- **Just the Right Word**: Replace bold phrase with a word.
- **Applying Meanings**: Circle correct answers (multiple choice).
- **Word Study**: Prefix/Suffix analysis, Synonyms, or Analogies. Ingest this section.
- **EXCLUDE**: none.

**Output Logic:**
- **IDs**: `b[Book]-l[Lesson]-s[Index]` (e.g., `b4-l19-s1`).
- **Title**: Exercise name (e.g., "19A Finding Meanings").
- **Content**: The instructions text.
- **Questions**: Array of `Question` objects.
    - **ID**: `[exercise-id]-q[Number]`.
    - **Type**: usually "multiple-choice".
    - **Options**: The provided choices.

### 3. Reading Passage

**Input Pattern:**
```text
Reading Passage
Title
[Paragraphs...]
```

**Output Logic:**
- **ID**: `b[Book]-l[Lesson]-s[Last]`
- **Title**: "Reading Passage: [Title]"
- **Type**: "non-fiction"
- **Content**: The full text. **Important**: Bold specific vocabulary words using markdown `**word**`.
- **Questions**: Array of `Question` objects.
    - **ID**: `b[Book]-l[Lesson]-p-q[Number]`
    - **Type**: "multiple-choice"
    - **Conversion Requirement**: You must convert the original 15 open-ended questions into **multiple-choice questions**.
    - **Structure**:
        - `question`: The original question text.
        - `options`: 4 distinct options including the correct answer.
        - `correctAnswer`: The correct answer string.

### 4. Fun & Fascinating Facts

**Input Pattern:**
```text
Fun & Fascinating FACTS
[Points...]
```

**Output Logic:**
- **ID**: `b[Book]-l[Lesson]-s[Last+1]` (e.g., `b6-l1-facts`).
- **Title**: "Fun & Fascinating FACTS".
- **Type**: "non-fiction".
- **Content**: The full text, usually bulleted points. Bold vocabulary words.
- **wordsIncluded**: List of words mentioned/taught in the facts.

## Validation

After generating the file:
1.  Check strictly against `lib/types.ts`.
2.  Verify array exports match the naming convention: `b[X]_l[Y]_words`, `b[X]_l[Y]_story_[Z]`.
