function solution(domains) {
  const output = [];
  for (let i = 0; i < domains.length; i++) {
    if (domains[i].slice(-5).includes('.com')) {
      output.push('commercial');
    } else if (domains[i].slice(-5).includes('.org')) {
      output.push('organization');
    } else if (domains[i].slice(-5).includes('.net')) {
      output.push('network');
    } else if (domains[i].slice(-5).includes('.info')) {
      output.push('information');
    }
  }
  return output;
}
solution(['com.net.info',
  'org.com.net',
  'net.com.org',
  'info.net.com',
  'net.net.com',
  'com.com.org',
  'info.info.net',
  'org.org.info']);
