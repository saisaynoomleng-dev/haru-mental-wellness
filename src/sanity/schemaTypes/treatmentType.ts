import { FaBriefcaseMedical } from 'react-icons/fa';
import { defineType } from 'sanity';

export const treatment = defineType({
  name: 'treatment',
  icon: FaBriefcaseMedical,
  type: 'document',
  fields: [],
});
