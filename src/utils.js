// if remember me is false set cookie for session and but if it's true set cookie for 24 hours;
function setCookie(cookieName, cookieValue, remember) {
    // console.log('here');
  if (remember) {
    document.cookie = `${cookieName}=${cookieValue};path=/; httpOnly: true`;
  } else {
    let now = new Date();
    let expDay = 1;
    now.setTime(now.getTime() + expDay * 24 * 60 * 60 * 1000);
    document.cookie = `${cookieName}=${cookieValue};path=/;expires=${now};httpOnly: true`;
  }
}

function deleteCookie(cookieName, cookieValue = ""){
    let now = new Date();
    let expDay = 1;
    now.setTime(now.getTime() - expDay * 24 * 60 * 60 * 1000);
    document.cookie = `${cookieName}=${cookieValue};path=/;expires=${now};httpOnly: true`;
}

// all cookies is separated from each other with (;) sign and we need to split them and then search between them
function getCookie(cookieName) {
    let cookiesArray = document.cookie.split(";") ?? [];
    let mainCookie = null;
    cookiesArray.some((cookie) => {
      if (cookie.includes(cookieName)) {
        mainCookie = cookie.substring(cookie.indexOf("=") + 1);
        return true;
      }
    });
    return mainCookie;
  }

  // if we need to save a special cookie in localStorage
function setTokenInLocalStorage(itemName, itemContent) {
    itemName && itemContent && window.localStorage(itemName, itemContent);
  }
  
  // if we need to get a special item in localStorage
  function getTokenFromLocalStorage(itemName) {
    return localStorage.getItem(itemName);
  }
  
  // if we need to remove a special item in localStorage
  function removeTokenFromLocalStorage(itemName) {
    return localStorage.removeItem(itemName);
  }


  export {getCookie, deleteCookie, setCookie, getTokenFromLocalStorage, setTokenInLocalStorage, removeTokenFromLocalStorage}