export type Book = {
  id: string;
  title: string;
  author?: string;
  isbn?: string;
  description?: string;
};

export function normalizeBook(raw: Record<string, unknown>, index: number): Book {
  return {
    id: String(raw.id ?? raw.bookId ?? raw._id ?? index),
    title: String(raw.title ?? raw.name ?? raw.nombre ?? 'Libro sin título'),
    author: raw.author ? String(raw.author) : raw.autor ? String(raw.autor) : undefined,
    isbn: raw.isbn ? String(raw.isbn) : undefined,
    description: raw.description
      ? String(raw.description)
      : raw.descripcion
        ? String(raw.descripcion)
        : undefined,
  };
}
