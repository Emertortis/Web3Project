import Runes from './Runes';
import AmmosDropdown from './Ammos';
import ArmorDropdown from './Armors';
import SorceriesIncantationsDropdown from './Soceries-Incantaions';
import TalismansDropdown from './Talismans';
import AshesDropdown from './Ashes';
import SpiritDropdown from './Spirits';
import WeaponsDropdown from './Weapons';
import ShieldsDropdown from './Shields';

import { render, screen, waitFor, fireEvent } from '@testing-library/react';

// shields test cases

describe('ShieldsDropdown', () => {
    //..............Test Case 1: Verify that the dropdown list of shield names is populated correctly...........
    test('dropdown list of shield names is populated correctly', async () => {
      render(<ShieldsDropdown />);
      const dropdownToggle = screen.getByRole('button', { name: /shields-dropdown/i });
      dropdownToggle.click();
      await waitFor(() => {
        const dropdownItems = screen.getAllByRole('menuitem');
        expect(dropdownItems.length).toBeGreaterThan(0);
        expect(dropdownItems[0].textContent).toEqual('Shield 1');
      });
    });
  //....................Test Case 2: Verify that the selected shield name is updated correctly when a new item is selected......
    test('selected shield name is updated correctly when a new item is selected', async () => {
      render(<ShieldsDropdown />);
      const dropdownToggle = screen.getByRole('button', { name: /shields-dropdown/i });
      dropdownToggle.click();
      const dropdownItem = screen.getByRole('menuitem', { name: /shield 2/i });
      fireEvent.click(dropdownItem);
      const selectedShield = await screen.findByText('Shield 2');
      expect(selectedShield).toBeInTheDocument();
    });
  });



// test cases for weapons

// Test Case 1: Verify that the dropdown menu is rendered with the correct number of options
test('renders a dropdown menu with the correct number of options', async () => {
    render(<WeaponsDropdown />);
    const dropdownToggle = screen.getByRole('button', { name: /Select weapons/i });
    userEvent.click(dropdownToggle);
    const dropdownMenu = await screen.findByRole('menu');
    const options = within(dropdownMenu).getAllByRole('menuitem');
    expect(options.length).toBe(307); // Replace with the actual number of options in the database
  });

// Test Case 2: Verify that the selected weapon is updated when an option is clicked
test('updates the selected weapon when an option is clicked', async () => {
    render(<WeaponsDropdown />);
    const dropdownToggle = screen.getByRole('button', { name: /Select weapons/i });
    userEvent.click(dropdownToggle);
    const dropdownMenu = await screen.findByRole('menu');
    const options = within(dropdownMenu).getAllByRole('menuitem');
    const firstOption = options[0];
    userEvent.click(firstOption);
    expect(dropdownToggle).toHaveTextContent(firstOption.textContent);
  });


  // runes test cases 