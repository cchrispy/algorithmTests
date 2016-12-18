import { expect } from 'chai';
import DirectedGraph from '../src/directedGraph';

describe('Directed Graph', () => {

  var graph;
  beforeEach(() => {
    graph = new DirectedGraph();

    graph.addNode('A'); // 1
    graph.addNode('B'); // 2
    graph.addNode('C'); // 3
    graph.addNode('D'); // 4
    graph.addNode('E'); // 5
    graph.addNode('F'); // 6
    graph.addNode('G'); // 7
    graph.addNode('H'); // 8
    graph.addNode('I'); // 9
  })

  it('Should be a class', () => {
    expect(graph).to.be.an.instanceof(DirectedGraph);
  });

  it('Should have "addNode", "removeNode", "addEdge", "removeEdge", "getConnections", "getSize" methods', () => {
    expect(graph.addNode).to.be.a('function');
    expect(graph.removeNode).to.be.a('function');
    expect(graph.addEdge).to.be.a('function');
    expect(graph.removeEdge).to.be.a('function');
    expect(graph.getConnections).to.be.a('function');
    expect(graph.getSize).to.be.a('function');
  });

  it('Should keep track of the number of nodes when adding and removing', () => {

    expect(graph.getSize()).to.equal(9);

    graph.addNode('X');

    expect(graph.getSize()).to.equal(10);

    graph.removeNode('A');

    expect(graph.getSize()).to.equal(9);
  });

  it('Should not allow an existing value to be added', () => {

    expect(graph.addNode('A')).to.be.false;
    expect(graph.getSize()).to.equal(9);

  });

  it('Should return the appropriate connections for a given node/value', () => {

    graph.addEdge('A', 'B'); // A --> B
    graph.addEdge('A', 'C'); // A --> C
    graph.addEdge('A', 'D'); // A --> D
    graph.addEdge('B', 'D'); // B --> D
    graph.addEdge('C', 'D'); // C --> D
    graph.addEdge('D', 'E'); // D --> E
    graph.addEdge('D', 'F'); // D --> F
    graph.addEdge('F', 'G'); // F --> G

    expect(graph.getConnections('A')).to.have.lengthOf(3).and.have.members(['B', 'C', 'D']);
    expect(graph.getConnections('B')).to.have.lengthOf(1).and.have.members(['D']);
    expect(graph.getConnections('C')).to.have.lengthOf(1).and.have.members(['D']);
    expect(graph.getConnections('D')).to.have.lengthOf(2).and.have.members(['E', 'F']);
    expect(graph.getConnections('F')).to.have.lengthOf(1).and.have.members(['G']);
    expect(graph.getConnections('E')).to.have.lengthOf(0);

  });

  it('Should be able to add and remove edges', () => {
    graph.addEdge('A', 'B'); // A --> B
    graph.addEdge('A', 'C'); // A --> C
    graph.addEdge('A', 'D'); // A --> D
    graph.addEdge('B', 'D'); // B --> D
    graph.addEdge('C', 'D'); // C --> D
    graph.addEdge('D', 'E'); // D --> E
    graph.addEdge('D', 'F'); // D --> F
    graph.addEdge('F', 'G'); // F --> G

    graph.removeEdge('A', 'B');
    graph.removeEdge('C', 'D');

    expect(graph.getConnections('A')).to.have.lengthOf(2).and.have.members(['C', 'D']);
    expect(graph.getConnections('C')).to.have.lengthOf(0);
    expect(graph.getConnections('D')).to.have.lengthOf(2).and.have.members(['E', 'F']);

  });

  it('Edges to a removed node should be erased', () => {

    graph.addEdge('A', 'B'); // A --> B
    graph.addEdge('A', 'C'); // A --> C
    graph.addEdge('A', 'D'); // A --> D
    graph.addEdge('B', 'D'); // B --> D
    graph.addEdge('C', 'D'); // C --> D
    graph.addEdge('D', 'E'); // D --> E
    graph.addEdge('D', 'F'); // D --> F
    graph.addEdge('F', 'G'); // F --> G

    graph.removeNode('D');
    graph.removeNode('G');

    expect(graph.getConnections('A')).to.have.lengthOf(2).and.have.members(['B', 'C']);
    expect(graph.getConnections('B')).to.have.lengthOf(0);
    expect(graph.getConnections('C')).to.have.lengthOf(0);
    expect(graph.getConnections('F')).to.have.lengthOf(0);

    expect(graph.getConnections('D')).to.be.false;

    expect(graph.getSize()).to.equal(7);

  });


})