import React from 'react';
import { render } from 'react-testing-library';

import List from './List';

const simpleData = [
    <li key="cheese">Cheese</li>,
    <li key="milk">Milk</li>,
    <li key="butter">Butter</li>
];

const detailData = [
    {
        name: 'Kevin',
        key: 50212
    },
    {
        name: 'Joe',
        key: 55511
    }
]

const badDetailData = [
    {
        name: 'Kevin',
        id: 50212
    },
    {
        name: 'Joe',
        id: 55511
    }
]

describe("List", function () {

    it('renders without crashing', () => {
        render(<List />);
    });

    it('shows message if there are no children', () => {
        const { getByText } = render(<List />);
        expect(getByText('List is empty...except for this')).toBeInTheDocument();
    })

    it('renders children', () => {
        const { getByText } = render(<List>{simpleData}</List>);
        expect(getByText('Cheese')).toBeInTheDocument();
        expect(getByText('Milk')).toBeInTheDocument();
        expect(getByText('Butter')).toBeInTheDocument();
    });

    it('properly renders a single child', () => {
        const { getByText } = render(<List><li key="hi">Hi</li></List>)
        expect(getByText('Hi')).toBeInTheDocument();
    })

    it('renders the correct number of children', () => {
        const { container } = render(<List>{simpleData}</List>);
        expect(container.children[0].childElementCount).toEqual(3);
    })

    it('renders the correct number of listItems', () => {
        const { container } = render(<List listItems={simpleData} />);
        expect(container.children[0].childElementCount).toEqual(3);
    });
   
    it('children are not rendered if listItems are provided', () => {
        const { container, getByText } = render(<List listItems={simpleData}><li>Hello</li></List>);
        expect(container.children[0].childElementCount).toEqual(3);
    });

    it('creates children out of objects', () => {
        const { container } = render(<List listItems={detailData} />);
        expect(container.children[0].childElementCount).toEqual(2)
    });

    it('displays a value if no "value" property is given',()=>{
        const { container } = render(<List listItems={badDetailData}></List>);
        expect(container.children[0].childElementCount).toEqual(2);
    })

});