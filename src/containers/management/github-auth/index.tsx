import * as React from 'react';

interface IProp {
  location?: any;
}

const clientId: string = 'f23ae7b1ad27bb19489c';
function handleSubmit() {
  const authUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}`;
  window.location.replace(authUrl);
}

export default function GithubAuthPage({ location }: IProp) {
  return (
    <main className="auth__container">
      <form className="auth__form">
        <a
          onClick={handleSubmit}
        >
          login
        </a>
      </form>
    </main>
  )
}
