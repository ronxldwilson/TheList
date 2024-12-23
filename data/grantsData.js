const grantsData = [
  {
    Name: '1517 Medici Project',
    Website: '1517 Medici Project',
    GrantAmount: '$1,000',
    GivenTo: 'Individual',
    Institution: '1517 Fund'
  },
  {
    Name: '776 Fellowship',
    Website: 'https://www.776.org/',
    GrantAmount: '$100,000',
    GivenTo: 'N/A',
    Institution: '776 Foundation'
  },
  {
    Name: 'Activate Fellowship',
    Website: 'https://www.activate.org/apply/#what-we-look-for-1',
    GrantAmount: '$280k - $395k',
    GivenTo: 'Individual, Companies',
    Institution: 'Activate Global Inc.'
  },
  {
    Name: 'Activate Fellowship',
    Website: 'https://www.activate.org/the-fellowship',
    GrantAmount: '$100K',
    GivenTo: 'N/A',
    Institution: 'N/A'
  },
  {
    Name: 'Adamnite Microgrants',
    Website: 'https://adamnite.org/pages/grant',
    GrantAmount: '$1000 or more',
    GivenTo: 'N/A',
    Institution: 'Adamnite Labs'
  },
  {
    Name: 'AI Agents Global Challenge',
    Website: 'https://www.aiagentschallenge.com/',
    GrantAmount: '$5k - $500k',
    GivenTo: 'Companies, Individual',
    Institution: 'MM01 AI'
  },
  {
    Name: 'Antikythera Studio',
    Website: 'https://antikythera.org/studios',
    GrantAmount: '$5k',
    GivenTo: 'Individual',
    Institution: 'Berggruen Institute'
  },
  {
    Name: 'Aspen Tech Policy Hub',
    Website: 'aspentechpolicyhub.org/nonprofit-and-public-interest-fellowship/',
    GrantAmount: '$50,000 challenge prize',
    GivenTo: 'Nonprofit',
    Institution: 'N/A'
  },
  {
    Name: 'Awesome Foundation',
    Website: 'https://www.awesomefoundation.org/en',
    GrantAmount: '$1K/month',
    GivenTo: 'Individuals/orgs',
    Institution: 'N/A'
  },
  {
    Name: 'Brains',
    Website: 'https://spec.tech/brains',
    GrantAmount: 0,
    GivenTo: 'N/A',
    Institution: 'N/A'
  },
  {
    Name: 'Civics Unplugged',
    Website: 'https://www.civicsunplugged.org/',
    GrantAmount: 'N/A',
    GivenTo: 'N/A',
    Institution: 'N/A'
  },
  {
    Name: 'Cosmos',
    Website: 'https://cosmosinstitute.substack.com',
    GrantAmount: '$1K - $10K',
    GivenTo: 'Individuals',
    Institution: 'N/A'
  },
  {
    Name: 'DojoGrants',
    Website: 'https://dojo.nucleate.xyz/dojogrants',
    GrantAmount: 'up to $8000 USD',
    GivenTo: 'Individual',
    Institution: 'Nucleate Dojo'
  },
  {
    Name: 'EA Funds',
    Website: 'https://funds.effectivealtruism.org/apply-for-funding',
    GrantAmount: '$5,000-$200,000',
    GivenTo: 'N/A',
    Institution: 'N/A'
  },
  {
    Name: 'Edge City Fellowship',
    Website: 'https://wiki.edgecity.live/fellowship',
    GrantAmount: 'N/A',
    GivenTo: 'Individual',
    Institution: 'Gary Sheng'
  },
  {
    Name: 'Emergent Ventures',
    Website: 'https://www.mercatus.org/emergent-ventures',
    GrantAmount: ">$5,000 (we've heard of people getting up to $250K)",
    GivenTo: 'N/A',
    Institution: 'Mercatus Center'
  },
  {
    Name: 'Emergent Ventures India',
    Website: 'https://www.mercatus.org/emergent-ventures',
    GrantAmount: '>$5,000',
    GivenTo: 'N/A',
    Institution: 'Mercatus Center'
  },
  {
    Name: 'Fast Grants',
    Website: 'Fast Grants',
    GrantAmount: '$10,000-$500,000',
    GivenTo: 'N/A',
    Institution: 'Fast Grants'
  },
  {
    Name: 'Foresight Fellowship',
    Website: 'https://foresight.org/',
    GrantAmount: 'N/A',
    GivenTo: 'N/A',
    Institution: 'Foresight Institute'
  },
  {
    Name: 'Gitcoin Grants',
    Website: 'Gitcoin Grants',
    GrantAmount: 'N/A',
    GivenTo: 'N/A',
    Institution: 'Gitcoin'
  },
  {
    Name: 'Henry Arnhold Fellowship',
    Website: 'https://www.mulagofoundation.org/henry-fellows-program',
    GrantAmount: '$100k',
    GivenTo: 'Non-Profits, Companies',
    Institution: 'Mulago Foundation'
  },
  {
    Name: 'Inflection Grants',
    Website: 'https://www.inflectiongrants.com/',
    GrantAmount: '$2,000',
    GivenTo: 'N/A',
    Institution: 'Cyan Banister'
  },
  {
    Name: 'Longevity Fellowship',
    Website: 'https://www.longbiofellowship.org/',
    GrantAmount: 'N/A',
    GivenTo: 'N/A',
    Institution: 'LessDeath Inc'
  },
  {
    Name: 'Magnificent Grants (Hummingbird)',
    Website: 'Magnificent Grants',
    GrantAmount: '$100,000',
    GivenTo: 'N/A',
    Institution: 'N/A'
  },
  {
    Name: 'Moth Fund',
    Website: 'https://www.mothfund.com/',
    GrantAmount: 'N/A',
    GivenTo: 'N/A',
    Institution: 'Molly Mielke'
  },
  {
    Name: 'Nadia Asparouhova',
    Website:
      'https://medium.com/@nayafia/how-to-give-away-5-000-on-the-internet-66cae906ab7e',
    GrantAmount: 'N/A',
    GivenTo: 'N/A',
    Institution: 'N/A'
  },
  {
    Name: 'New Science',
    Website: 'https://newscience.org/',
    GrantAmount: 'N/A',
    GivenTo: 'N/A',
    Institution: 'Jaan Tallin & Vitalik'
  },
  {
    Name: 'Next Generation Internet 0',
    Website: 'https://nlnet.nl/funding.html',
    GrantAmount: '$5k - $50k',
    GivenTo:
      'Individual, Non-Profits, Companies',
    Institution: 'NLnet Foundation'
  },
  {
    Name: 'Non Trivial',
    Website: 'https://www.non-trivial.org/',
    GrantAmount: '$15K',
    GivenTo: 'All',
    Institution: 'Peter McIntyre (Founder)'
  },
  {
    Name: 'O’Shaughnessy Fellowship',
    Website: "O'Shaughnessy Fellowships",
    GrantAmount: '$100,000',
    GivenTo: 'N/A',
    Institution: "O'Shaughnessy Ventures"
  },
  {
    Name: 'O’Shaughnessy Grants',
    Website: 'https://www.osv.llc/oshaughnessy-fellowships',
    GrantAmount: '$10k',
    GivenTo: 'Individual',
    Institution: 'O’Shaughnessy Ventures'
  },
  {
    Name: 'Open Grants',
    Website: 'https://www.opengrants.io/',
    GrantAmount: 'N/A',
    GivenTo: 'N/A',
    Institution: 'N/A'
  },
  {
    Name: 'Promise Prize',
    Website: 'promiseprize.org (email teams@promiseprize.org)',
    GrantAmount: '$250,000',
    GivenTo:
      'Non-profit or forprofit',
    Institution: 'Atrum'
  },
  {
    Name: 'Protostars',
    Website: 'https://www.blackbird.vc/programs/protostars',
    GrantAmount: '$1k',
    GivenTo: 'Individual',
    Institution: 'Blackbird Foundation'
  },
  {
    Name: 'Rainer Arnhold Fellowship',
    Website: 'https://www.mulagofoundation.org/rainer-fellows-program',
    GrantAmount: '$100k',
    GivenTo: 'Non-Profits, Companies',
    Institution: 'Mulago Foundation'
  },
  {
    Name: 'Rise Program',
    Website: 'https://www.risefortheworld.org/',
    GrantAmount: 'N/A',
    GivenTo: 'N/A',
    Institution: 'Schmidt & Rhodes'
  },
  {
    Name: 'Schmidt Futures',
    Website: 'https://www.schmidtfutures.com/',
    GrantAmount: 'N/A',
    GivenTo: 'N/A',
    Institution: 'N/A'
  },
  {
    Name: 'SciFounder Fellowship',
    Website:
      'https://www.janestreet.com/join-jane-street/programs-and-events/graduate-research-fellowship/',
    GrantAmount: '$400k',
    GivenTo: 'Companies',
    Institution: 'SciFounders'
  },
  {
    Name: 'Silicon Valley Fellowship',
    Website: 'https://www.siliconvalleyfellowship.com/',
    GrantAmount: '$1k - $5k',
    GivenTo: 'Individual',
    Institution: 'Gomry Next Gen Fund'
  },
  {
    Name: 'Slavin Foundation',
    Website: 'http://slavinfoundation.org/',
    GrantAmount: 'N/A',
    GivenTo: 'Students',
    Institution: 'N/A'
  },
  {
    Name: 'Survival and Flourishing Fund',
    Website: 'https://survivalandflourishing.fund/',
    GrantAmount: 'N/A',
    GivenTo: 'N/A',
    Institution: 'N/A'
  },
  {
    Name: 'Telora',
    Website: 'https://telora.com/',
    GrantAmount: '$40K',
    GivenTo:
      'Individual, teams, or company',
    Institution: 'N/A'
  },
  {
    Name: 'Thiel Fellowship',
    Website: 'Thiel Fellowship',
    GrantAmount: '$100,000',
    GivenTo: 'Individual',
    Institution: 'Thiel Foundation'
  },
  {
    Name: 'Vibefund',
    Website: 'https://vibe.camp/vibefund/',
    GrantAmount: '$500-N/A',
    GivenTo: 'N/A',
    Institution: 'Vibecamp'
  },
  {
    Name: 'WTFund',
    Website: 'https://www.allthingswtf.com/wtfund',
    GrantAmount: '~$25,000 (USD)',
    GivenTo: 'Indian entity',
    Institution: 'WTF Podcast'
  },
  {
    Name: 'Z Fellows',
    Website: 'Z Fellows',
    GrantAmount: '$10,000 investment',
    GivenTo:
      'Individuals & Companies',
    Institution: 'Cory Levy'
  },
  {
    Name: 'Local Host',
    Website: 'https://offlocalhost.xyz/',
    GrantAmount: '$1K - $100K',
    GivenTo:
      'Individuals & Companies',
    Institution: 'KG Ventures'
  },
  {
    Name: 'Roddenberry Catalyst',
    Website: 'https://roddenberryfoundation.org/our-work/catalyst-fund/',
    GrantAmount: '$2.5k - $15k',
    GivenTo:
      'Individuals, Companies & Non Profits',
    Institution: 'Rodenberry Foundation'
  },
  {
    Name: 'HackClub',
    Website: 'https://hackclub.com/',
    GrantAmount: 'N/A',
    GivenTo: 'N/A',
    Institution: 'N/A'
  },
  {
    Name: 'General Catalyst Venture Fellows',
    Website: 'https://www.generalcatalyst.com/venture-fellows',
    GrantAmount: '$2.5k',
    GivenTo: 'Individuals',
    Institution: 'General Catalyst'
  },
  {
    Name: 'Cactus Capital',
    Website: 'https://cactuscapital.org/',
    GrantAmount: '$50 - $100',
    GivenTo: 'Individuals',
    Institution: 'N/A'
  },
  {
    Name: 'CryoDAO',
    Website: 'https://www.cryodao.org/fellowship',
    GrantAmount: '$100 - $3,000',
    GivenTo: 'Individuals',
    Institution: 'CryoDAO'
  },
  {
    Name: 'Go Human',
    Website: 'http://gohuman.fund/',
    GrantAmount: '$100',
    GivenTo: 'Individuals',
    Institution: 'Go Human! Fund'
  },
  {
    Name: 'Bagel Fund',
    Website: 'https://bagel.fund',
    GrantAmount: '$100-$500',
    GivenTo: 'Individuals',
    Institution: 'Bagel Fund'
  },
  {
    Name: 'Merge Grant',
    Website:
      'https://odteam.notion.site/Merge-Grant-7eadfac121ae45328c80cd3a733fb2ab',
    GrantAmount: '$50 - $1k',
    GivenTo: 'Individuals',
    Institution: 'Ari Dutilh & Julian Weisser'
  },
  {
    Name: 'Polar Fellowship',
    Website: 'https://www.polaris-fellowship.com/',
    GrantAmount: 'N/A',
    GivenTo: 'Individuals',
    Institution: 'Entrepreneur First'
  },
  {
    Name: 'Foundry',
    Website: 'https://www.blackbird.vc/foundry',
    GrantAmount: '$1k - $5k',
    GivenTo: 'Companies',
    Institution: 'Blackbird'
  },
  {
    Name: 'Breakthrough Energy Fellows',
    Website: 'https://befellows.smapply.org/',
    GrantAmount: '$50k - $500k',
    GivenTo: 'Individuals',
    Institution: 'Bill Gates'
  },
  {
    Name: 'The Formidable Fund',
    Website: 'https://www.formidablefund.org/',
    GrantAmount: '$1k',
    GivenTo: 'Individuals',
    Institution: 'Formidable Fund'
  }
]

export default grantsData;