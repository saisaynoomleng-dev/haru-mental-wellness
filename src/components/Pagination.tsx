'use client';

export function getPaginationRange(currentPage: number, totalPages: number) {
  const totalVisiblePages = 3;
  const pages = [];

  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const firstPage = 1;
  const lastPage = totalPages;

  const startPage = Math.max(currentPage - 1, 2);
  const endPage = Math.min(currentPage + 1, totalPages - 1);

  pages.push(firstPage);

  if (startPage > 2) {
    pages.push('...');
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  if (endPage < totalPages - 1) {
    pages.push('...');
  }

  pages.push(lastPage);
  return pages;
}
