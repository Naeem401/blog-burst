import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";


const NavBar = () => {
 // State for the theme
 const [theme, setTheme] = useState('light');
 // State to indicate whether the theme has been loaded from localStorage or not
 const [themeLoaded, setThemeLoaded] = useState(false);

 // update state on toggle
 const handleToggle = e => {
   if (e.target.checked) {
     setTheme('synthwave');
     localStorage.setItem('theme', 'synthwave');
   } else {
     setTheme('light');
     localStorage.setItem('theme', 'light');
   }
 }

 useEffect(() => {
   // Load theme from localStorage when the component mounts
   const localTheme = localStorage.getItem('theme');
   if (localTheme) {
     setTheme(localTheme);
     setThemeLoaded(true);
   } else {
     // If theme is not found in localStorage, set the theme to light
     localStorage.setItem('theme', 'light');
     setThemeLoaded(true);
   }
 }, []);

 // Update the data-theme attribute when theme changes
 useEffect(() => {
   if (themeLoaded) {
     document.querySelector('html').setAttribute('data-theme', theme);
   }
 }, [theme, themeLoaded]);


    return (
        <div>
            <div className="navbar bg-base-100 shadow-lg fixed px-4 z-10">
  <div className="flex-1">
    <Link to='/' className="btn btn-ghost gap-0 text-secondary text-2xl">Blog<span className="text-primary">Burst</span></Link>
  </div>
  <div className="flex-none gap-4">
    <ul className="menu menu-horizontal px-1 hidden md:flex items-center gap-6">
      <NavLink to='/' className={({isActive}) => isActive? 'text-primary font-bold' : 'font-bold'}>Home</NavLink>
      <NavLink to='/blogs' className={({isActive}) => isActive? 'text-primary font-bold' : 'font-bold'}>Blogs</NavLink>
      <NavLink to='/bookmarks' className={({isActive}) => isActive? 'text-primary font-bold' : 'font-bold'}>Bookmarks</NavLink>
    </ul>
    <label className="cursor-pointer grid place-items-center">
  <input type="checkbox" checked={theme === 'synthwave'} onChange={handleToggle} value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>
  <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>
  </div>
</div>
        </div>
    );
};

export default NavBar;