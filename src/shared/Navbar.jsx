import React, { useContext } from "react";
import {
    Navbar,
    Collapse,
    Typography,
    Button,
    IconButton,
    List,
    ListItem,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";
import {
    ChevronDownIcon,
    Bars3Icon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import {
    Bars4Icon,
    GlobeAmericasIcon,
    NewspaperIcon,
    PhoneIcon,
    RectangleGroupIcon,
    SquaresPlusIcon,
    SunIcon,
    TagIcon,
    UserGroupIcon,
} from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import userIcon from '../assets/user.png';

const navListMenuItems = [
    {
        title: "Blog",
        description: "Find the perfect solution for your needs.",
        icon: Bars4Icon,
    },
    {
        title: "Contact",
        description: "Find the perfect solution for your needs.",
        icon: PhoneIcon,
    },
    {
        title: "News",
        description: "Read insightful articles, tips, and expert opinions.",
        icon: NewspaperIcon,
    }

];

// function NavListMenu() {
//     const [isMenuOpen, setIsMenuOpen] = React.useState(false);
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
//     const renderItems = navListMenuItems.map(
//         ({ icon, title, description }, key) => (
//             <a href="#" key={key}>
//                 <MenuItem className="flex items-center gap-3 rounded-lg">
//                     <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
//                         {" "}
//                         {React.createElement(icon, {
//                             strokeWidth: 2,
//                             className: "h-6 text-gray-900 w-6",
//                         })}
//                     </div>
//                     <div>
//                         <Typography
//                             variant="h6"
//                             color="blue-gray"
//                             className="flex items-center text-sm font-bold"
//                         >
//                             {title}
//                         </Typography>
//                         <Typography
//                             variant="paragraph"
//                             className="text-xs !font-medium text-blue-gray-500"
//                         >
//                             {description}
//                         </Typography>
//                     </div>
//                 </MenuItem>
//             </a>
//         ),
//     );

//     return (
//         <React.Fragment>
//             <Menu
//                 open={isMenuOpen}
//                 handler={setIsMenuOpen}
//                 offset={{ mainAxis: 20 }}
//                 placement="bottom"
//                 allowHover={true}
//             >
//                 <MenuHandler>
//                     <Typography as="div" variant="small" className="font-medium">
//                         <ListItem
//                             className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
//                             selected={isMenuOpen || isMobileMenuOpen}
//                             onClick={() => setIsMobileMenuOpen((cur) => !cur)}
//                         >
//                             Resources
//                             <ChevronDownIcon
//                                 strokeWidth={2.5}
//                                 className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
//                                     }`}
//                             />
//                             <ChevronDownIcon
//                                 strokeWidth={2.5}
//                                 className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
//                                     }`}
//                             />
//                         </ListItem>
//                     </Typography>
//                 </MenuHandler>
//                 <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
//                     <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
//                         {renderItems}
//                     </ul>
//                 </MenuList>
//             </Menu>
//             <div className="block lg:hidden">
//                 <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
//             </div>
//         </React.Fragment>
//     );
// }

function NavList() {
    const { user } = useContext(AuthContext);
    return (
        <List className="mt-4 mb-6 p-0 lg:mt-0 items-center lg:mb-0 lg:flex-row lg:p-1">
            <Typography
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="font-medium"
            >

                <NavLink to="/" className={({ isActive }) => isActive ? 'flex text-orange-700 hover:font-semibold items-center gap-2 py-2 pr-4' : 'flex items-center gap-2 py-2 pr-4'}>Home</NavLink>
            </Typography>
            {/* <NavListMenu /> */}
            {
                user?.email && <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                >
                    <NavLink to="/addblog" className={({ isActive }) => isActive ? 'flex text-orange-700 hover:font-semibold items-center gap-2 py-2 pr-4' : 'flex items-center gap-2 py-2 pr-4'}>Add Blog</NavLink>
                </Typography>
            }
            <Typography
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="font-medium"
            >
                <NavLink to="/allblogs" className={({ isActive }) => isActive ? 'flex text-orange-700 hover:font-semibold items-center gap-2 py-2 pr-4' : 'flex items-center gap-2 py-2 pr-4'}>All Blogs</NavLink>
            </Typography>
            <Typography
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="font-medium"
            >
                <NavLink to="/featured" className={({ isActive }) => isActive ? 'flex text-orange-700 hover:font-semibold items-center gap-2 py-2 pr-4' : 'flex items-center gap-2 py-2 pr-4'}>Featured Blogs</NavLink>
            </Typography>
            {
                user?.email && <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                >
                    <NavLink to="/wishlist" className={({ isActive }) => isActive ? 'flex text-orange-700 hover:font-semibold items-center gap-2 py-2 pr-4' : 'flex items-center gap-2 py-2 pr-4'}>WishList</NavLink>
                </Typography>
            }

        </List>
    );
}

export function NavbarWithMegaMenu() {
    const { user, logOut } = useContext(AuthContext);
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    return (
        <div className="bg-gray-200">
            <div className="mx-auto w-11/12 bg-gray-200 px-4 py-2">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <Typography
                        as="a"
                        href="#"
                        variant="h6"
                        className="mr-4 font-blod text-2xl cursor-pointer py-1.5 lg:ml-2"
                    >
                        <Link to="/">Universal <span className="text-orange-700">Blog</span></Link>
                    </Typography>
                    <div className="hidden lg:block">
                        <NavList />
                    </div>
                    <div className="hidden gap-2 lg:flex">
                        {
                            user ? <div className="hidden gap-2 lg:flex items-center">
                                {
                                    user?.photoURL ? <img src={user?.photoURL} alt={userIcon} className="h-10 w-10 rounded-full" /> : <UserGroupIcon className="h-10 w-10 rounded-full" />
                                }
                                {/* <h1 className="text-sm">{user?.email}</h1> */}
                                <div>
                                    <Button className="hover:bg-gray-300" variant="outlined" size="sm" >
                                        <NavLink onClick={logOut} className={({ isActive }) => isActive ? 'flex text-orange-700 hover:font-semibold items-center gap-2' : 'flex items-center gap-2'}>Log Out</NavLink>
                                    </Button>
                                </div>
                            </div> : <div className="hidden gap-2 lg:flex">
                                <Button className="hover:bg-gray-300" variant="outlined" size="sm" >
                                    <NavLink to="/login" className={({ isActive }) => isActive ? 'flex text-orange-700 hover:font-semibold items-center gap-2' : 'flex items-center gap-2'}>Login</NavLink>
                                </Button>
                                <Button className="hover:bg-gray-300" variant="outlined" size="sm">
                                    <NavLink to="/register" className={({ isActive }) => isActive ? 'flex text-orange-700 hover:font-semibold items-center gap-2' : 'flex items-center gap-2'}>Register</NavLink>
                                </Button>
                            </div>
                        }
                    </div>


                    <IconButton
                        variant="text"
                        color="blue-gray"
                        className="lg:hidden"
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                        ) : (
                            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                        )}
                    </IconButton>
                </div>
                <Collapse open={openNav}>
                    <NavList />
                    <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
                        <Button className="hover:bg-gray-300" variant="outlined" size="sm" fullWidth>
                            <NavLink to="/login">Log In</NavLink>
                        </Button>
                        <Button className="hover:bg-gray-300" variant="outlined" size="sm" fullWidth>
                            <NavLink to="/register">Register</NavLink>
                        </Button>
                    </div>
                </Collapse>
            </div>
        </div>
    );
}