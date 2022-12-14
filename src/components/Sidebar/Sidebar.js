import { 
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarLink,
    SidebarMenu } from './SidebarElements';

const Sidebar = ( {isOpen, toggle} ) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='hero'>
                        Home
                    </SidebarLink>
                    <SidebarLink to='about'>
                        About Me
                    </SidebarLink>
                    <SidebarLink to='projects'>
                        Projects
                    </SidebarLink>
                    <SidebarLink to='services'>
                        Services
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    );
}   

export default Sidebar;