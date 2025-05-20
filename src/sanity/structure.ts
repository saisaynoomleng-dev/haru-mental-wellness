import { BsNewspaper } from 'react-icons/bs';
import {
  FaCalendarAlt,
  FaHandHoldingMedical,
  FaPenFancy,
  FaPlusSquare,
  FaQuestion,
} from 'react-icons/fa';
import { FaUserDoctor } from 'react-icons/fa6';
import { MdOutlineRateReview } from 'react-icons/md';
import { RiContactsLine } from 'react-icons/ri';
import { TbLogs } from 'react-icons/tb';

import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('blog').title('Blogs').icon(TbLogs),
      S.documentTypeListItem('author').title('Authors').icon(FaPenFancy),
      S.documentTypeListItem('therapist')
        .title('Therapists')
        .icon(FaUserDoctor),
      S.documentTypeListItem('FAQ').title('FAQs').icon(FaQuestion),
      S.documentTypeListItem('therapy').title('Therapies').icon(FaPlusSquare),
      S.documentTypeListItem('treatment')
        .title('Treatments')
        .icon(FaHandHoldingMedical),

      S.divider(),

      S.documentTypeListItem('newsletter')
        .title('Newsletter Subscriptions')
        .icon(BsNewspaper),
      S.documentTypeListItem('contact')
        .title('Contact List')
        .icon(RiContactsLine),
      S.documentTypeListItem('review')
        .title('Reviews')
        .icon(MdOutlineRateReview),
      S.documentTypeListItem('appointment')
        .title('Appointments')
        .icon(FaCalendarAlt),
    ]);
