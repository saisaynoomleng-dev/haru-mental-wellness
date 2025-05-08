import { BsNewspaper } from 'react-icons/bs';
import { MdOutlineRateReview } from 'react-icons/md';
import { RiContactsLine } from 'react-icons/ri';

import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('newsletter')
        .title('Newsletter Subscriptions')
        .icon(BsNewspaper),
      S.documentTypeListItem('contact')
        .title('Contact List')
        .icon(RiContactsLine),
      S.documentTypeListItem('review')
        .title('Reviews')
        .icon(MdOutlineRateReview),
    ]);
