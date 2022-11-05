import _ from 'lodash';

export default (name) => {
  let normalizedName = name;
  if (normalizedName === 'Nunu & Willump') {
    normalizedName = 'Nunu';
  }
  if (normalizedName === 'Wukong') {
    normalizedName = 'MonkeyKing';
  }
  if (normalizedName === 'Renata Glasc') {
    normalizedName = 'Renata';
  }
  if (normalizedName === 'Rek\'Sai') {
    normalizedName = 'RekSai';
  }
  if (normalizedName === 'Kog\'Maw') {
    normalizedName = 'KogMaw';
  }
  if (normalizedName === 'LeBlanc') {
    normalizedName = _.capitalize(normalizedName);
  }
  if (normalizedName === 'K\'Sante') {
    normalizedName = 'KSante';
  }
  if (/\s/.test(normalizedName)) {
    normalizedName = normalizedName.replace(/ /g, '');
  }
  if (/[']/.test(normalizedName)) {
    normalizedName = _.capitalize(normalizedName.replace(/'/g, ''));
  }
  if (/[.]/.test(normalizedName)) {
    normalizedName = normalizedName.replace(/\./g, '');
  }

  return normalizedName;
};
