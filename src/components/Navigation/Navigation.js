import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems
} from 'carbon-components-react';


const items = [
  { name: 'About', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Experience', path: '/experience' },
  { name: 'Education', path: '/education' }
]

const Navigation = () => {

  const location = useLocation();
  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <Header aria-label="Carbon Tutorial">
          <SkipToContent />
          <HeaderMenuButton
            aria-label="Open menu"
            onClick={onClickSideNavExpand}
            isActive={isSideNavExpanded}
          />
          {/* <HeaderName href="/" prefix="">
            Sachin Mahajan
              </HeaderName> */}
          <HeaderNavigation aria-label="Carbon Tutorial">
            {/* <HeaderMenuItem href="/repos">Repositories</HeaderMenuItem> */}
            {items.map(i => (
              <HeaderMenuItem
                isCurrentPage={
                  location.pathname === '/' && i.path === '/' ? true : location.pathname === i.path
                }
                element={Link}
                to={i.path}
                key={i.name}
              >
                {i.name}
              </HeaderMenuItem>
            ))}
          </HeaderNavigation>
          <SideNav
            aria-label="Side navigation"
            expanded={isSideNavExpanded}
            isPersistent={false}>
            <SideNavItems>
              <HeaderSideNavItems>
                {items.map(i => (
                  <HeaderMenuItem
                    isCurrentPage={
                      location.pathname === '/' && i.path === '/' ? true : location.pathname === i.path
                    }
                    element={Link}
                    to={i.path}
                    key={i.name}
                  >
                    {i.name}
                  </HeaderMenuItem>
                ))}
              </HeaderSideNavItems>
            </SideNavItems>
          </SideNav>
          <HeaderGlobalBar />
        </Header>
      )}
    />
  );

}


export default Navigation;