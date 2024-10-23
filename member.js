function skillsMember() {
  var member = document.querySelector('.member');
  var memberSkills = document.querySelector('.member-skills');

  member.addEventListener('click', function() {
    if (memberSkills.style.display === 'block') {
      memberSkills.style.display = 'none';
    } else {
      memberSkills.style.display = 'block';
    }
  });
}