import { 
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
  } from "@/components/ui/navigation-menu";
  import { Button } from "@/components/ui/button";
  
  const Navigation = () => {
    return (
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className="hidden md:block">
            <NavigationMenuLink 
              href="#services" 
              className="text-gray-700 hover:text-gray-900 px-4 py-2"
            >
              Services
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="hidden md:block">
            <NavigationMenuLink 
              href="#about" 
              className="text-gray-700 hover:text-gray-900 px-4 py-2"
            >
              About
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="hidden md:block">
            <NavigationMenuLink 
              href="#contact" 
              className="text-gray-700 hover:text-gray-900 px-4 py-2"
            >
              Contact
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
              <a 
                href="https://square.link/u/ZqySgynk" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Pay Now
              </a>
            </Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
  };
  
  export default Navigation;