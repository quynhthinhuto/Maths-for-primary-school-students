window.MATHS_GRADES = [
  {
    id:1,color:'#f3e8bd',tagline:'Little numbers, big discoveries.',summary:'Counting, shapes & first sums',intro:'Let’s get curious about numbers! Count, spot patterns, explore shapes, and take your first steps with adding and taking away.',
    topics:[
      {title:'Numbers & counting',text:'Count objects one by one. The last number you say tells you how many there are. Try counting forwards and backwards to 20.',example:'1, 2, 3, 4, 5 … and back again!'},
      {title:'Adding & taking away',text:'Adding means putting groups together. Taking away makes a group smaller. Use your fingers, counters, or a drawing to help.',example:'4 + 3 = 7     ·     9 − 4 = 5'},
      {title:'Patterns & shapes',text:'Look for the rule in a pattern. A triangle has 3 straight sides, a square has 4 equal sides, and a circle has no corners.',example:'2, 4, 6, 8 … add 2 each time.'},
      {title:'Time & everyday maths',text:'An analogue clock has two hands. When the long hand points to 12, the short hand tells you the hour.',example:'Short hand on 3 + long hand on 12 = 3 o’clock'}
    ],
    questions:[
      {topic:'Adding',prompt:'There are 4 stars. You add 3 more. How many stars are there altogether?',visual:'stars',choices:['6','7','8','9'],answer:1,hint:'Start at 4, then count on three more: 5, 6 …',explanation:'4 + 3 = 7. Count the first 4 stars, then the 3 extra stars. There are 7 altogether.'},
      {topic:'Taking away',prompt:'Mia has 9 crayons. She gives 4 to a friend. How many crayons does Mia have left?',choices:['4','6','5','3'],answer:2,hint:'Start at 9 and count backwards four steps.',explanation:'9 − 4 = 5. Counting backwards gives 8, 7, 6, 5. Mia has 5 crayons left.'},
      {topic:'Number patterns',prompt:'What number comes next in this pattern?',visual:'2, 4, 6, ?',choices:['7','9','10','8'],answer:3,hint:'How much bigger is each number than the one before?',explanation:'Each number is 2 more than the last one. 6 + 2 = 8, so the next number is 8.'},
      {topic:'Shapes',prompt:'How many straight sides does a triangle have?',visual:'triangle',choices:['3','4','5','2'],answer:0,hint:'Follow the edges around the shape and count them.',explanation:'A triangle has 3 straight sides and 3 corners. “Tri” means three.'},
      {topic:'Time',prompt:'The long hand points to 12 and the short hand points to 3. What time is it?',visual:'clock',choices:['12 o’clock','6 o’clock','3 o’clock','9 o’clock'],answer:2,hint:'When the long hand points to 12, read the hour from the short hand.',explanation:'It is 3 o’clock. The long hand on 12 means a whole hour, and the short hand points to 3.'}
    ]
  },
  {
    id:2,color:'#f4ddd0',tagline:'Growing confidence, one sum at a time.',summary:'Place value, groups & sharing',intro:'Build on what you know. Explore bigger numbers, make equal groups, share fairly, and use maths in everyday little adventures.',
    topics:[
      {title:'Tens & ones',text:'Two-digit numbers are made of tens and ones. The position of a digit tells you its value. Split a number into parts to understand it.',example:'64 = 6 tens + 4 ones = 60 + 4'},
      {title:'Adding bigger numbers',text:'Split numbers into tens and ones to add them. If the ones make 10 or more, exchange 10 ones for 1 ten.',example:'28 + 17 = 28 + 10 + 7 = 45'},
      {title:'Equal groups & halves',text:'Multiplication is a quick way to count equal groups. To find half of a number, share it into two equal groups.',example:'4 groups of 3 = 12     ·     Half of 18 = 9'},
      {title:'Money & change',text:'Work out change by taking the cost away from the amount paid. You can also count up from the cost to the amount paid.',example:'50 cents − 35 cents = 15 cents'}
    ],
    questions:[
      {topic:'Place value',prompt:'How many tens are there in the number 64?',visual:'64 = ? tens + 4 ones',choices:['4','6','60','10'],answer:1,hint:'Look at the digit on the left. It is in the tens column.',explanation:'64 is made of 6 tens and 4 ones. The digit 6 has a value of 60.'},
      {topic:'Addition',prompt:'What is 28 + 17?',choices:['35','44','45','46'],answer:2,hint:'Add 10 to 28 first, then add the remaining 7.',explanation:'28 + 10 = 38, then 38 + 7 = 45. So 28 + 17 = 45.'},
      {topic:'Multiplication',prompt:'There are 4 baskets with 3 apples in each basket. How many apples are there altogether?',visual:'groups',choices:['7','10','15','12'],answer:3,hint:'Count in threes four times: 3, 6, 9 …',explanation:'4 × 3 = 12. Four equal groups of 3 make 3 + 3 + 3 + 3 = 12 apples.'},
      {topic:'Fractions',prompt:'What is half of 18?',choices:['9','8','6','12'],answer:0,hint:'Share 18 equally between two groups.',explanation:'18 ÷ 2 = 9. Two groups of 9 make 18, so half of 18 is 9.'},
      {topic:'Money',prompt:'A pencil costs 35 cents. You pay with 50 cents. How much change should you get?',choices:['25 cents','20 cents','15 cents','85 cents'],answer:2,hint:'Count up from 35 to 50, or subtract 35 from 50.',explanation:'50 − 35 = 15. You can count 5 cents from 35 to 40, then 10 more to 50. The change is 15 cents.'}
    ]
  },
  {
    id:3,color:'#e0e8d8',tagline:'Make connections. Find your own way.',summary:'Times tables, fractions & measures',intro:'Put your number skills to work. Discover how multiplication and division connect, explore fractions, and measure the world around you.',
    topics:[
      {title:'Times tables & division',text:'Multiplication and division undo each other. Knowing one multiplication fact helps you find two related division facts.',example:'7 × 6 = 42     ·     42 ÷ 6 = 7'},
      {title:'Fractions of a whole',text:'A fraction describes equal parts of a whole. The bottom number counts all the equal parts. The top number counts the parts we choose.',example:'3 shaded parts out of 8 equal parts = 3/8'},
      {title:'Perimeter',text:'The perimeter is the distance all the way around a shape. Add every side. Opposite sides of a rectangle are equal.',example:'A 6 cm by 4 cm rectangle: 6 + 4 + 6 + 4 = 20 cm'},
      {title:'Minutes & time',text:'There are 60 minutes in an hour. A quarter of an hour is 15 minutes, and half an hour is 30 minutes.',example:'2:15 + 30 minutes = 2:45'}
    ],
    questions:[
      {topic:'Multiplication',prompt:'What is 7 × 6?',choices:['36','42','48','49'],answer:1,hint:'Try 5 × 7 = 35, then add one more group of 7.',explanation:'7 × 6 = 42. Five groups of 7 make 35, and one more group of 7 makes 42.'},
      {topic:'Division',prompt:'56 stickers are shared equally among 8 children. How many stickers does each child get?',choices:['6','8','7','9'],answer:2,hint:'Think of the 8 times table. 8 multiplied by what gives 56?',explanation:'56 ÷ 8 = 7 because 8 × 7 = 56. Each child gets 7 stickers.'},
      {topic:'Fractions',prompt:'This strip has 8 equal parts. What fraction of the strip is shaded green?',visual:'fraction',choices:['3/5','5/8','8/3','3/8'],answer:3,hint:'Write the number of shaded parts above the total number of equal parts.',explanation:'3 of the 8 equal parts are shaded, so the fraction is 3/8. The denominator is 8 and the numerator is 3.'},
      {topic:'Perimeter',prompt:'A rectangle is 6 cm long and 4 cm wide. What is its perimeter?',visual:'rectangle',choices:['20 cm','24 cm','10 cm','16 cm'],answer:0,hint:'Add all four sides: 6 + 4 + 6 + 4.',explanation:'The perimeter is 6 + 4 + 6 + 4 = 20 cm. Perimeter measures the outside edge, so remember all four sides.'},
      {topic:'Time',prompt:'A lesson starts at 2:15 and lasts 30 minutes. What time does it finish?',choices:['2:30','3:15','2:45','3:00'],answer:2,hint:'Add 30 minutes to the minutes part of 2:15.',explanation:'15 + 30 = 45 minutes, so the lesson finishes at 2:45.'}
    ]
  },
  {
    id:4,color:'#dfe6ee',tagline:'Stretch your thinking. See what’s possible.',summary:'Bigger numbers, decimals & area',intro:'Ready for your next discovery? Work with larger numbers, get to know decimals, and explore the maths hiding in shapes and spaces.',
    topics:[
      {title:'Multiplying larger numbers',text:'Break a large number into hundreds, tens, and ones. Multiply each part, then add the results.',example:'326 × 4 = 1,200 + 80 + 24 = 1,304'},
      {title:'Adding fractions',text:'When fractions have the same denominator, add the numerators and keep the denominator. The size of each equal part stays the same.',example:'2/5 + 1/5 = 3/5'},
      {title:'Comparing decimals',text:'Compare the digits in each place, starting from the left. You can add a zero at the end of a decimal without changing its value.',example:'0.7 = 0.70, which is greater than 0.45'},
      {title:'Area & angles',text:'Area measures the space inside a shape. Multiply a rectangle’s length by its width. A right angle is a square corner measuring 90°.',example:'8 cm × 6 cm = 48 cm²     ·     A right angle = 90°'}
    ],
    questions:[
      {topic:'Multiplication',prompt:'What is 326 × 4?',choices:['1,204','1,304','1,324','1,404'],answer:1,hint:'Multiply 300, 20, and 6 by 4 separately, then add.',explanation:'300 × 4 = 1,200, 20 × 4 = 80, and 6 × 4 = 24. Together they make 1,304.'},
      {topic:'Fractions',prompt:'What is 2/5 + 1/5?',choices:['3/10','2/5','3/5','1/5'],answer:2,hint:'The parts are all fifths. Add the top numbers and keep the bottom number.',explanation:'2 fifths + 1 fifth = 3 fifths. So 2/5 + 1/5 = 3/5. The denominator stays 5.'},
      {topic:'Decimals',prompt:'Which decimal is the greatest?',choices:['0.45','0.09','0.65','0.7'],answer:3,hint:'Write them with two decimal places: 0.45, 0.09, 0.65, and 0.70.',explanation:'0.7 is the greatest. Written as 0.70, it is 70 hundredths, which is more than 65, 45, or 9 hundredths.'},
      {topic:'Area',prompt:'A rectangle is 8 cm long and 6 cm wide. What is its area?',choices:['48 cm²','28 cm²','14 cm²','36 cm²'],answer:0,hint:'Area of a rectangle = length × width.',explanation:'8 × 6 = 48, so the area is 48 cm². We use square centimetres because area measures the space inside.'},
      {topic:'Angles',prompt:'What type of angle measures exactly 90°?',visual:'angle',choices:['An acute angle','An obtuse angle','A right angle','A straight angle'],answer:2,hint:'Think of the corner of a square or a sheet of paper.',explanation:'A right angle measures exactly 90°. An acute angle is smaller, an obtuse angle is between 90° and 180°, and a straight angle is 180°.'}
    ]
  },
  {
    id:5,color:'#e8e0ed',tagline:'Think a little deeper. Aim a little higher.',summary:'Fractions, percentages & problem solving',intro:'Bring all your maths ideas together. Explore fractions and percentages, tackle decimal calculations, and become a confident problem solver.',
    topics:[
      {title:'Fractions with different denominators',text:'Make the denominators equal before adding fractions. Multiply the numerator and denominator by the same number to find an equivalent fraction.',example:'3/4 + 1/8 = 6/8 + 1/8 = 7/8'},
      {title:'Decimal calculations',text:'Line up the decimal points when adding. Fill empty places with zeros, then add each column, exchanging when you need to.',example:'3.75 + 2.60 = 6.35'},
      {title:'Percentages',text:'Percent means out of 100. Useful percentage facts connect to fractions: 50% is half, 25% is a quarter, and 10% is a tenth.',example:'25% of 80 = 80 ÷ 4 = 20'},
      {title:'Volume & averages',text:'The volume of a cuboid is length × width × height. To find the mean of a set of numbers, add them and divide by how many there are.',example:'Mean of 6, 8, 10, 12 = 36 ÷ 4 = 9'}
    ],
    questions:[
      {topic:'Fractions',prompt:'What is 3/4 + 1/8?',choices:['4/12','7/8','4/8','1/2'],answer:1,hint:'Write 3/4 as eighths first. Multiply both 3 and 4 by 2.',explanation:'3/4 = 6/8. Then 6/8 + 1/8 = 7/8. The denominators must match before you add.'},
      {topic:'Decimals',prompt:'What is 3.75 + 2.6?',choices:['5.81','6.01','6.35','6.41'],answer:2,hint:'Write 2.6 as 2.60, then line up the decimal points.',explanation:'3.75 + 2.60 = 6.35. The hundredths give 5; 7 tenths + 6 tenths make 13 tenths, so exchange 10 tenths for 1 whole.'},
      {topic:'Percentages',prompt:'A class plants 80 seeds. 25% grow into flowers. How many seeds grow into flowers?',choices:['25','40','60','20'],answer:3,hint:'25% is the same as one quarter. Divide 80 by 4.',explanation:'25% = 1/4. One quarter of 80 is 80 ÷ 4 = 20, so 20 seeds grow into flowers.'},
      {topic:'Volume',prompt:'A cuboid is 5 cm long, 3 cm wide, and 2 cm high. What is its volume?',choices:['30 cm³','10 cm³','15 cm³','25 cm³'],answer:0,hint:'Multiply the three dimensions: length × width × height.',explanation:'5 × 3 × 2 = 30. The volume is 30 cm³, meaning the cuboid holds 30 cubes measuring 1 cm on each side.'},
      {topic:'Averages',prompt:'The numbers of books read by four children are 6, 8, 10, and 12. What is the mean?',visual:'6   8   10   12',choices:['8','10','9','36'],answer:2,hint:'Add all four numbers, then divide the total by 4.',explanation:'6 + 8 + 10 + 12 = 36. There are 4 children, so the mean is 36 ÷ 4 = 9 books.'}
    ]
  }
];
