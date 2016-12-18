import { expect } from 'chai';
import DirectedGraph from '../src/directedGraph';

describe('Directed Graph', () => {

  var graph;
  beforeEach(() => {
    graph = new DirectedGraph();
  })

  it('Should be a class', () => {
    expect(graph).to.be.an.instanceof(DirectedGraph);
  });

  it('Should have "addNode", "removeNode", "addEdge", "removeEdge", "getConnections" methods', () => {
    expect(graph.addNode).to.be.a('function');
    expect(graph.removeNode).to.be.a('function');
    expect(graph.addEdge).to.be.a('function');
    expect(graph.removeEdge).to.be.a('function');
    expect(graph.getConnections).to.be.a('function');
  });

  xit('Should keep track of the number of nodes', () => {

  });

  xit('Should be able to add and remove nodes', () => {

  });

  xit('Should be able to add and remove edges', () => {

  });

  xit('Edges to a node that was removed should be erased', () => {

  });

  xit('Should return the appropriate connections for a given node/value', () => {

  });


})