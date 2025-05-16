import { BsNewspaper } from 'react-icons/bs';
import { FaHandHoldingMedical, FaPenFancy, FaQuestion } from 'react-icons/fa';
import { MdOutlineRateReview } from 'react-icons/md';
import { RiContactsLine } from 'react-icons/ri';
import { TbLogs } from 'react-icons/tb';

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
      S.documentTypeListItem('FAQ').title('FAQs').icon(FaQuestion),
      S.documentTypeListItem('treatment')
        .title('Treatments')
        .icon(FaHandHoldingMedical),
      S.documentTypeListItem('blog').title('Blogs').icon(TbLogs),
      S.documentTypeListItem('author').title('Authors').icon(FaPenFancy),
    ]);
