(function () {
  'use strict';
  var grades = window.MATHS_GRADES;
  var gradeId = Number(document.body.dataset.grade);
  var grade = grades.find(function (g) { return g.id === gradeId; });
  var key = 'little-maths-progress-v1';
  var storageAvailable = true;
  var saved = { grades: {} };
  var arrow = '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14m-5-5 5 5-5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var bulb = '<svg width="21" height="21" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8 17c0-3-3-4-3-8a7 7 0 0 1 14 0c0 4-3 5-3 8H8Zm0 0v3h8v-3m-6 6h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var star = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m12 3 2.6 5.4 5.9.8-4.3 4.2 1 5.9-5.2-2.8-5.2 2.8 1-5.9L3.5 9.2l5.9-.8L12 3Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>';
  try {
    var stored = JSON.parse(localStorage.getItem(key));
    if (stored && stored.grades && typeof stored.grades === 'object') saved = stored;
  } catch (error) { storageAvailable = false; }
  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, function (c) { return { '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]; });
  }
  function persist() {
    try { localStorage.setItem(key, JSON.stringify(saved)); }
    catch (error) { storageAvailable = false; }
  }
  function emptyProgress() { return { answers:[null,null,null,null,null], checked:[false,false,false,false,false], current:0, completed:false, reflection:{mood:'',note:''} }; }
  function getProgress() {
    var s = saved.grades[gradeId];
    if (!s || !Array.isArray(s.answers) || s.answers.length !== 5 || !Array.isArray(s.checked) || s.checked.length !== 5 || !Number.isInteger(s.current) || s.current < 0 || s.current > 4) s = saved.grades[gradeId] = emptyProgress();
    if (!s.reflection || typeof s.reflection !== 'object') s.reflection = {mood:'',note:''};
    return s;
  }
  var menuButton = document.getElementById('grade-menu-button');
  var dropdown = document.getElementById('grade-dropdown');
  dropdown.innerHTML = grades.map(function (g) {
    return '<a href="/grade-'+g.id+'/"'+(gradeId === g.id?' aria-current="page"':'')+'><span class="mini-grade" style="--grade-color:'+g.color+'">'+g.id+'</span>Grade '+g.id+'</a>';
  }).join('');
  function closeMenu() { dropdown.hidden = true; menuButton.setAttribute('aria-expanded','false'); }
  menuButton.addEventListener('click',function () {
    var open = dropdown.hidden;
    dropdown.hidden = !open;
    menuButton.setAttribute('aria-expanded',String(open));
  });
  document.addEventListener('click',function (event) { if (!event.target.closest('.grade-menu')) closeMenu(); });
  document.addEventListener('keydown',function (event) {
    if (event.key === 'Escape' && !dropdown.hidden) { closeMenu(); menuButton.focus(); }
    if (event.key === 'ArrowDown' && event.target === menuButton) {
      event.preventDefault(); dropdown.hidden = false; menuButton.setAttribute('aria-expanded','true'); dropdown.querySelector('a').focus();
    }
  });
  function doodle(id) {
    var shapes = [
      '<path d="M20 4v32M4 20h32" stroke-width="5"/>',
      '<circle cx="14" cy="14" r="10"/><circle cx="26" cy="26" r="10"/>',
      '<path d="M20 4 37 35H3L20 4Z"/><path d="M20 16v12m-6-6h12"/>',
      '<rect x="5" y="5" width="28" height="28" rx="3" transform="rotate(12 19 19)"/><path d="M12 16h14M12 24h14"/>',
      '<circle cx="10" cy="10" r="5"/><circle cx="30" cy="30" r="5"/><path d="m9 32 22-24"/>'
    ];
    return '<svg class="grade-doodle" viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+shapes[id-1]+'</svg>';
  }
  if (!grade) {
    var grid = document.getElementById('grade-grid');
    if (grid) grid.innerHTML = grades.map(function (g) {
      var s = saved.grades[g.id];
      var progressLabel = s && s.completed ? 'Practice completed ✓' : s && s.checked && s.checked.some(Boolean) ? 'Continue your practice' : '4 topics · 5 questions';
      return '<a href="/grade-'+g.id+'/" class="grade-card" style="--grade-color:'+g.color+'" aria-label="Explore Grade '+g.id+'"><div class="grade-card-top"><span class="grade-number">'+g.id+'</span>'+doodle(g.id)+'</div><h3>Grade '+g.id+'</h3><p>'+g.summary+'</p><div class="grade-card-bottom"><span>'+progressLabel+'</span><span class="circle-arrow">'+arrow+'</span></div></a>';
    }).join('');
    return;
  }
  document.body.style.setProperty('--grade-color',grade.color);
  document.getElementById('grade-hero').innerHTML = '<div class="grade-hero-copy"><div class="eyebrow">Your Grade '+gradeId+' adventure</div><h1>'+grade.tagline+'</h1><p>'+grade.intro+'</p></div><div class="grade-hero-illustration" aria-hidden="true"><div class="grade-big-number">'+gradeId+'</div><div class="grade-stat">A little learning.<br>A little practice.<br>A lot of possibility.</div></div>';
  var panel = document.getElementById('grade-panel');
  var state = getProgress();
  function pager() {
    return '<nav class="grade-pager" aria-label="Other grades">'+(gradeId>1?'<a href="/grade-'+(gradeId-1)+'/">← Grade '+(gradeId-1)+'</a>':'<a href="/#grades">← All grades</a>')+'<a href="/#grades">Choose a different grade</a>'+(gradeId<5?'<a href="/grade-'+(gradeId+1)+'/">Grade '+(gradeId+1)+' →</a>':'<a href="/">Home page →</a>')+'</nav>';
  }
  function content() {
    return '<div class="panel-heading"><div><h2>A few little ideas to explore.</h2><p>Read, wonder, and try an example. You’re building something great.</p></div><span class="soft-label">4 friendly topics</span></div><div class="topics-grid">'+grade.topics.map(function (topic,i) {
      return '<article class="topic-card"><div class="topic-label"><span>0'+(i+1)+'</span><h3>'+topic.title+'</h3></div><p>'+topic.text+'</p><div class="example"><strong>Try this</strong><span>'+topic.example+'</span></div></article>';
    }).join('')+'</div><div class="topic-tip"><p>Ready to put your ideas into practice?<span>Five questions. Plenty of time. Let’s see what you can do.</span></p><a class="btn btn-primary" href="#exercises">'+(state.checked.some(Boolean)?'Continue practising':'Try the exercises')+' '+arrow+'</a></div>'+pager();
  }
  function visual(kind) {
    var art;
    if (kind === 'stars') art = '<span aria-label="Four stars plus three stars">★★★★ <span style="color:#b9b38f">+</span> ★★★</span>';
    else if (kind === 'triangle') art = '<svg viewBox="0 0 220 100" role="img" aria-label="A triangle with three straight sides"><path d="m110 10 65 80H45l65-80Z" fill="#efdfac" stroke="#7b8b69" stroke-width="3" stroke-linejoin="round"/></svg>';
    else if (kind === 'clock') art = '<svg viewBox="0 0 200 110" role="img" aria-label="Clock showing the long hand at 12 and the short hand at 3"><circle cx="100" cy="55" r="48" fill="#fffdf0" stroke="#a7b59a" stroke-width="2"/><g font-family="sans-serif" font-size="12" fill="#6a7f67" text-anchor="middle"><text x="100" y="23">12</text><text x="137" y="60">3</text><text x="100" y="96">6</text><text x="63" y="60">9</text></g><path d="M100 28v27h24" stroke="#365e48" stroke-width="4" stroke-linecap="round"/><circle cx="100" cy="55" r="4" fill="#dd886b"/></svg>';
    else if (kind === 'groups') art = '<svg viewBox="0 0 340 85" role="img" aria-label="Four baskets each containing three apples">'+[0,1,2,3].map(function (n) { return '<g transform="translate('+(n*84)+',0)"><path d="m7 32 7 41h49l7-41Z" fill="#e9d6a8" stroke="#c3af7c" stroke-width="1.5"/><circle cx="24" cy="31" r="10" fill="#d98b6c"/><circle cx="52" cy="31" r="10" fill="#d98b6c"/><circle cx="38" cy="45" r="10" fill="#d98b6c"/></g>'; }).join('')+'</svg>';
    else if (kind === 'fraction') art = '<svg viewBox="0 0 370 75" role="img" aria-label="A strip of eight equal parts with three shaded green">'+Array.from({length:8},function (_,i) { return '<rect x="'+(9+i*44)+'" y="14" width="44" height="47" fill="'+(i<3?'#7e9a72':'#fffdf1')+'" stroke="#b1bda2" stroke-width="1.5"/>'; }).join('')+'</svg>';
    else if (kind === 'rectangle') art = '<svg viewBox="0 0 230 110" role="img" aria-label="Rectangle 6 centimetres long and 4 centimetres wide"><rect x="40" y="28" width="135" height="70" rx="2" fill="#e4eacc" stroke="#829572" stroke-width="2"/><g font-family="sans-serif" font-size="13" fill="#5f7656" text-anchor="middle"><text x="107" y="18">6 cm</text><text x="205" y="69">4 cm</text></g></svg>';
    else if (kind === 'angle') art = '<svg viewBox="0 0 180 100" role="img" aria-label="A square corner marked as a right angle"><path d="M52 8v77h92" stroke="#6a8864" stroke-width="4" stroke-linecap="round"/><path d="M52 63h22v22" stroke="#db8867" stroke-width="2" fill="none"/><text x="93" y="58" font-family="sans-serif" font-size="18" fill="#6a8864">90°</text></svg>';
    else art = '<span>'+escapeHtml(kind)+'</span>';
    return '<div class="question-visual">'+art+'</div>';
  }
  function score() { return grade.questions.reduce(function (total,q,i) { return total+(state.checked[i] && state.answers[i] === q.answer?1:0); },0); }
  function exercises() {
    if (state.completed) return '<div class="empty-feedback"><div class="aside-icon">'+star+'</div><h2>Five little steps. A big well done.</h2><p>You’ve finished this practice and got '+score()+' out of 5 correct. Explore your feedback or have another go.</p><div class="results-actions"><a href="#feedback" class="btn btn-primary">See my feedback '+arrow+'</a><button type="button" class="btn btn-secondary" data-action="restart">Practise again</button></div></div>'+pager();
    var i = state.current;
    var q = grade.questions[i];
    var selected = state.answers[i];
    var checked = state.checked[i];
    var correct = checked && selected === q.answer;
    return '<div class="panel-heading"><div><h2>A little practice, a little progress.</h2><p>Choose an answer, then check it. You can use a hint whenever you like.</p></div><span class="soft-label">5 original questions</span></div><div class="exercise-layout"><div><div class="quiz-card"><div class="quiz-top"><span>Question '+(i+1)+' of 5</span><div class="progress-dots" aria-label="'+state.checked.filter(Boolean).length+' of 5 questions checked">'+state.checked.map(function (done,j) { return '<span class="progress-dot'+(done?' done':'')+(i===j?' current':'')+'"></span>'; }).join('')+'</div></div><div class="question-body"><div class="question-topic">'+q.topic+'</div><h3 id="question-prompt" tabindex="-1">'+q.prompt+'</h3>'+(q.visual?visual(q.visual):'')+'<div class="choices" role="group" aria-labelledby="question-prompt">'+q.choices.map(function (choice,j) {
      var cls = checked ? (j === q.answer?' correct':j===selected?' incorrect':'') : j === selected?' selected':'';
      return '<button type="button" class="choice'+cls+'" data-choice="'+j+'" aria-pressed="'+(j===selected)+'"'+(checked?' disabled':'')+'><span class="choice-letter" aria-hidden="true">'+String.fromCharCode(65+j)+'</span><span>'+escapeHtml(choice)+'</span>'+(checked && j === q.answer?'<span style="margin-left:auto" aria-label="Correct answer">✓</span>':'')+'</button>';
    }).join('')+'</div><div id="hint-message" class="hint-message" role="status" hidden>'+q.hint+'</div>'+(checked?'<div class="answer-message'+(!correct?' retry':'')+'" role="status"><strong>'+(correct?'That’s it. Nicely done!':'A little mistake is a chance to learn.')+'</strong><p>'+q.explanation+'</p></div>':'')+'<div class="question-actions">'+(!checked?'<button type="button" class="hint-btn" data-action="hint">'+bulb+' A little hint</button>':'<span class="text-link" style="font-size:11px;color:var(--muted)">Every try helps you grow.</span>')+'<button type="button" class="btn btn-primary" data-action="'+(checked?'next':'check')+'"'+(!checked && selected===null?' disabled':'')+'>'+(checked?(i===4?'See my feedback':'Next question'):'Check my answer')+' '+arrow+'</button></div></div></div><p style="color:var(--muted);font-size:10px;margin-top:13px">Your place is '+(storageAvailable?'saved in this browser':'kept for this visit')+'. You can take a break whenever you like.</p></div><aside class="practice-aside"><div class="aside-icon">'+bulb+'</div><h3>You’ve got this.</h3><p>Take your time. Draw a picture, use your fingers, or work it out on paper. There’s more than one way to think.</p><hr><p>Stuck on an idea?<br><a class="text-link" href="#content" style="margin-top:7px">Revisit the content '+arrow+'</a></p><hr><p class="quiz-note">These are original primary maths exercises. They are not taken from Cambridge books.</p></aside></div>'+pager();
  }
  var moodOptions = [{id:'confident',emoji:'😊',label:'Feeling confident'},{id:'learning',emoji:'🌱',label:'Still growing'},{id:'help',emoji:'🤔',label:'I’d like more practice'}];
  function reflection() {
    return '<section class="mood-section"><h3>How did maths feel today?</h3><p>A little reflection helps you notice your progress.</p><div class="moods" role="group" aria-label="How did maths feel today?">'+moodOptions.map(function (m) {
      return '<button type="button" class="mood'+(state.reflection.mood === m.id?' selected':'')+'" data-mood="'+m.id+'" aria-pressed="'+(state.reflection.mood === m.id)+'"><span aria-hidden="true">'+m.emoji+'</span>'+m.label+'</button>';
    }).join('')+'</div><label for="reflection-note">Anything you’d like to remember? <span style="color:var(--muted)">(optional)</span></label><textarea id="reflection-note" maxlength="500" placeholder="Today I learned…">'+escapeHtml(state.reflection.note || '')+'</textarea><div class="reflection-actions"><p>This reflection stays in this browser. It is not sent to a teacher.</p><button type="button" class="btn btn-primary" data-action="save-reflection">Save my reflection '+arrow+'</button></div><p id="reflection-status" class="save-notice" role="status"></p></section>';
  }
  function feedback() {
    var count = state.checked.filter(Boolean).length;
    if (!state.completed) return '<div class="empty-feedback"><div class="aside-icon">'+star+'</div><h2>Your next little discovery awaits.</h2><p>'+(count?'You’ve checked '+count+' of 5 questions. Finish your practice to see your score and helpful explanations.':'Try the five exercises to discover what you know and what you can explore next.')+'</p><a href="#exercises" class="btn btn-primary">'+(count?'Continue my practice':'Try the exercises')+' '+arrow+'</a></div>'+pager();
    var total = score();
    var message = total===5?'Look at you grow!':total>=3?'You’re making lovely progress.':'Every little step counts.';
    var encouragement = total===5?'Five out of five! You’ve understood these ideas beautifully. Keep that curiosity going.':total>=3?'You’ve got some great ideas. Take a look at the explanations below and give the tricky ones another thought.':'You’ve taken the first step, and that matters. Read the explanations, revisit the content, and try again when you’re ready.';
    return '<div class="results-hero"><div class="score-circle" aria-label="'+total+' out of 5 correct"><strong>'+total+'</strong><span>/ 5</span></div><div><h2>'+message+'</h2><p>'+encouragement+'</p><div class="results-actions"><button class="btn btn-primary" type="button" data-action="restart">Try again '+arrow+'</button><a href="#content" class="btn btn-secondary">Revisit the content</a></div></div></div><div class="panel-heading"><div><h2>Let’s look at your little discoveries.</h2><p>Every answer has something to teach us.</p></div></div>'+grade.questions.map(function (q,i) {
      var correct = state.answers[i] === q.answer;
      return '<article class="answer-review"><div class="review-number'+(!correct?' wrong':'')+'" aria-label="'+(correct?'Correct':'Review this answer')+'">'+(correct?'✓':i+1)+'</div><div><h3>'+q.prompt+'</h3><p class="review-answer">Your answer: '+escapeHtml(q.choices[state.answers[i]])+(correct?' · Correct!':' · Correct answer: '+escapeHtml(q.choices[q.answer]))+'</p><p>'+q.explanation+'</p></div></article>';
    }).join('')+reflection()+pager();
  }
  function render(focus) {
    var active = location.hash.slice(1);
    if (!['content','exercises','feedback'].includes(active)) active = 'content';
    document.querySelectorAll('[data-tab]').forEach(function (tab) {
      var current = tab.dataset.tab === active;
      tab.classList.toggle('active',current);
      if(current) tab.setAttribute('aria-current','page'); else tab.removeAttribute('aria-current');
    });
    panel.setAttribute('aria-label','Grade '+gradeId+' '+active);
    panel.innerHTML = active === 'exercises'?exercises():active === 'feedback'?feedback():content();
    document.title = 'Grade '+gradeId+' '+active.charAt(0).toUpperCase()+active.slice(1)+' · Little Maths';
    if(focus) {
      var heading=panel.querySelector('h2,h3');
      if(heading){heading.setAttribute('tabindex','-1');heading.focus({preventScroll:true});}
    }
  }
  panel.addEventListener('click',function (event) {
    var choice = event.target.closest('[data-choice]');
    if (choice && !state.checked[state.current]) {
      state.answers[state.current] = Number(choice.dataset.choice);
      persist();
      panel.querySelectorAll('[data-choice]').forEach(function (el) {
        var selected = el === choice;
        el.classList.toggle('selected',selected);
        el.setAttribute('aria-pressed',String(selected));
      });
      panel.querySelector('[data-action="check"]').disabled=false;
      return;
    }
    var mood = event.target.closest('[data-mood]');
    if (mood) {
      state.reflection.mood = mood.dataset.mood;
      panel.querySelectorAll('[data-mood]').forEach(function (el) { el.classList.toggle('selected',el===mood);el.setAttribute('aria-pressed',String(el===mood)); });
      return;
    }
    var button = event.target.closest('[data-action]');
    if (!button) return;
    switch(button.dataset.action) {
      case 'hint':
        var hint = document.getElementById('hint-message');
        hint.hidden = !hint.hidden;
        button.setAttribute('aria-expanded',String(!hint.hidden));
        break;
      case 'check':
        if (state.answers[state.current] === null) return;
        state.checked[state.current] = true;
        persist(); render(false);
        panel.querySelector('[data-action="next"]').focus({preventScroll:true});
        break;
      case 'next':
        if (state.current<4) { state.current++;persist();render(true); }
        else { state.completed=true;persist();location.hash='feedback'; }
        break;
      case 'restart':
        var reflectionData=state.reflection;
        state=saved.grades[gradeId]=emptyProgress();
        state.reflection=reflectionData;
        persist();
        if(location.hash==='#exercises') render(true); else location.hash='exercises';
        break;
      case 'save-reflection':
        state.reflection.note=document.getElementById('reflection-note').value.trim();
        persist();
        document.getElementById('reflection-status').textContent=storageAvailable?'Your reflection is saved. Look how far you’ve come.':'Your reflection is kept for this visit. Browser storage is unavailable.';
        break;
    }
  });
  window.addEventListener('hashchange',function () { render(true); });
  render(false);
})();
