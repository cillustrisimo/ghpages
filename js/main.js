function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  (function($){
    $('#terminal').terminal(function(command, term) {
      command = command.replace(/\s+/g,'');
      
      if (command == 'sudo') {
        try {
          window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
          if (result !== undefined)
            term.echo(new String(result));
        } catch(e) {
          term.error(new String(e));
        }
      } else
        term.echo(''); 
      if (command == 'about') {
        try {
          window.location.href = "https://illustrisimo.dev/pages/about.html";
          if (result !== undefined)
            term.echo(new String(result));
        } catch(e) {
          term.error(new String(e));
        }
      } else
       term.echo('');
      if (command == 'resume') {
        try {
          window.location.href = "https://illustrisimo.dev/pages/resume.html";
          if (result !== undefined)
            term.echo(new String(result));
        } catch(e) {
          term.error(new String(e));
        }
      } else
      term.echo('');
      if (command == 'projects') {
        try {
          window.location.href = "https://illustrisimo.dev/pages/projects.html";
          if (result !== undefined)
            term.echo(new String(result));
        } catch(e) {
          term.error(new String(e));
        }
      } else
      term.echo('');
      if (command == 'cdabout') {
        try {
          window.location.href = "https://illustrisimo.dev/pages/about.html";
          if (result !== undefined)
            term.echo(new String(result));
        } catch(e) {
          term.error(new String(e));
        }
      } else
      term.echo('');
      if (command == 'cdresume') {
        try {
          window.location.href = "https://illustrisimo.dev/pages/resume.html";
          if (result !== undefined)
            term.echo(new String(result));
        } catch(e) {
          term.error(new String(e));
        }
      } else
      term.echo('');
      if (command == 'cdprojects') {
        try {
          window.location.href = "https://illustrisimo.dev/pages/projects.html";
          if (result !== undefined)
            term.echo(new String(result));
        } catch(e) {
          term.error(new String(e));
        }
      } else
      term.echo('');
      if (command == '/about') {
        try {
          window.location.href = "https://illustrisimo.dev/pages/about.html";
          if (result !== undefined)
            term.echo(new String(result));
        } catch(e) {
          term.error(new String(e));
        }
      } else
      term.echo('');
      if (command == '/resume') {
        try {
          window.location.href = "https://illustrisimo.dev/pages/resume.html";
          if (result !== undefined)
            term.echo(new String(result));
        } catch(e) {
          term.error(new String(e));
        }
      } else
      term.echo('');
      if (command == '/projects') {
        try {
          window.location.href = "https://illustrisimo.dev/pages/projects.html";
          if (result !== undefined)
            term.echo(new String(result));
        } catch(e) {
          term.error(new String(e));
        }
      } else
      term.echo('');        
    },
    {
      greetings: '', 
      name: 'Carl Terminal',
      height: 80,
      width:700, 
      prompt: 'carl_illustrisimo:~$'
    });

})(jQuery);






// REALIGN LIST ON MENU PAGE. IMPLEMENT COMMANDS TO NAVIGATE SITE ON TERMINAL. FIX ICONS AT BOTTOM
if (command == 'help') {
  window.location.href = "http://google.com";
} 