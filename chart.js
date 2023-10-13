// JS 
var selectedPoint; 
var highlightColor = '#5C6BC0', 
  mutedHighlightColor = '#9FA8DA', 
  mutedFill = '#f3f4fa', 
  selectedFill = '#E8EAF6', 
  normalFill = 'white'; 
  
var points = [ 
  { 
    x: 'Eliott Nieves', 
    id: 'president', 
    attributes: { 
      role: 'CEO', 
      photo: getImgText( 
        'https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png'
      ) 
    } 
  }, 
  { 
    x: 'Eliott Nieves', 
    id: 'president2', 
    attributes: { 
      role: 'Country Head', 
      photo: getImgText( 
        'https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png'
      ) 
    } 
  },
  { 
    x: 'Business Team', 
    id: 'Business', 
    parent: 'president', 
    attributes: { 
      role: '', 
      photo: '',
      email: '',
    } 
  }, 
  { 
    x: 'Technical Team', 
    id: 'Technical', 
    parent: 'president', 
    attributes: { 
      role: '', 
      photo: '',
      email: ''
    } 
  }, 
  { 
    x: 'Services Team', 
    id: 'Services', 
    parent: 'president', 
    attributes: { 
      role: '', 
      photo: '',
      email: ''
    } 
  }, 
  { 
    x: 'Supply Chain', 
    id: 'Supply', 
    parent: 'president', 
    attributes: { 
      role: '', 
      photo: '',
      email: ''
    } 
  }, 
  { 
    x: 'OSG', 
    id: 'OSG', 
    parent: 'president', 
    attributes: { 
      role: '', 
      photo: '',
      email: ''
    } 
  }, 
  { 
    x: 'David', 
    id: 'Lead1', 
    parent: 'Business', 
    attributes: { 
      role: 'Business Lead', 
      photo: getImgText( 
        'https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png'
      ) 
    } 
  }, 
  { 
    x: 'Gethin', 
    id: 'Lead2', 
    parent: 'Technical', 
    attributes: { 
      role: 'Tech Lead', 
      photo: getImgText( 
        'https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png'
      ) 
    } 
  }, 
  { 
    x: 'Sonnie Kim', 
    id: 'Lead3', 
    parent: 'Services', 
    attributes: { 
      role: 'Service Lead', 
      photo: getImgText( 
        'https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png'
      ) 
    } 
  }, 
  { 
    x: 'William', 
    id: 'Lead4', 
    parent: 'Supply', 
    attributes: { 
      role: 'Supply Chain Lead', 
      photo: getImgText( 
        'https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png'
      ) 
    } 
  }, 
  { 
    x: 'Chris', 
    id: 'Lead5', 
    parent: 'OSG', 
    attributes: { 
      role: 'OSG Lead', 
      photo: getImgText( 
        'https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png'
      ) 
    } 
  },
  { 
    x: 'John', 
    id: 'Busemp1', 
    parent: 'Lead1', 
    attributes: { 
      role: 'Business employee1', 
      photo: getImgText( 
        'https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png'
      ) 
    } 
  }, 
  { 
    x: 'Russel', 
    id: 'Busemp2', 
    parent: 'Lead1', 
    attributes: { 
      role: 'Business employee2', 
      photo: getImgText( 
        'https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png'
      ) 
    } 
  }, 
  { 
    x: 'Messi', 
    id: 'Busemp3', 
    parent: 'Lead1', 
    attributes: { 
      role: 'Business employee2', 
      photo: getImgText( 
        'https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png'
      ) 
    } 
  }, 
  { 
    x: 'Maxwell', 
    id: 'Busemp4', 
    parent: 'Busemp1', 
    attributes: { 
      role: 'Employee', 
      photo: getImgText( 
        'https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png'
      ) 
    } 
  }, 
  { 
    x: 'Smith', 
    id: 'Busemp5', 
    parent: 'Busemp2', 
    attributes: { 
      role: 'Employee1', 
      photo: getImgText( 
        'https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png'
      ) 
    } 
  },
  { 
    x: 'Marsh', 
    id: 'Techemp1', 
    parent: 'Lead2', 
    attributes: { 
      role: 'Tech employee1', 
      photo: getImgText( 
        'https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png'
      ) 
    } 
  }, 
  { 
    x: 'Alex', 
    id: 'Techemp2', 
    parent: 'Lead2', 
    attributes: { 
      role: 'Tech employee2', 
      photo: getImgText( 
        'https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png'
      ) 
    } 
  }, 
  { 
    x: 'Hales', 
    id: 'Techemp3', 
    parent: 'Lead2', 
    attributes: { 
      role: 'Tech employee3', 
      photo: getImgText( 
        'https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png'
      ) 
    } 
  }, 
  { 
    x: 'Starc', 
    id: 'Techemp4', 
    parent: 'Lead2', 
    attributes: { 
      role: 'Tech employee4', 
      photo: getImgText( 
        'https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png'
      ) 
    } 
  }, 
  { 
    x: 'Hazelwood', 
    id: 'Techemp5', 
    parent: 'Lead2', 
    attributes: { 
      role: 'Tech employee5', 
      photo: getImgText( 
        'https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png'
      ) 
    } 
  },
  { 
    x: 'Brock', 
    id: 'Seremp1', 
    parent: 'Lead3', 
    attributes: { 
      role: 'Service employee1', 
      photo: getImgText( 
        'https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png'
      ) 
    } 
  },   
  { 
    x: 'Mark Wood', 
    id: 'Seremp2', 
    parent: 'Lead3', 
    attributes: { 
      role: 'Service employee2', 
      photo: getImgText( 
        'https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png'
      ) 
    } 
  },   
  { 
    x: 'Woakes', 
    id: 'Seremp3', 
    parent: 'Lead3', 
    attributes: { 
      role: 'Service employee3', 
      photo: getImgText( 
        'https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png'
      ) 
    } 
  },   
  { 
    x: 'Williamson', 
    id: 'Seremp4', 
    parent: 'Lead3', 
    attributes: { 
      role: 'Service employee4', 
      photo: getImgText( 
        'https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png'
      ) 
    } 
  },   
  { 
    x: 'Philips', 
    id: 'Seremp5', 
    parent: 'Lead3', 
    attributes: { 
      role: 'Service employee5', 
      photo: getImgText( 
        'https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png'
      ) 
    } 
  },
  { 
    x: 'Conway', 
    id: 'Osgemp1', 
    parent: 'Lead5', 
    attributes: { 
      role: 'OSG employee1', 
      photo: getImgText( 
        'https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png'
      ) 
    } 
  }, 
  { 
    x: 'Fregusan', 
    id: 'Osgemp2', 
    parent: 'Lead5', 
    attributes: { 
      role: 'OSG employee2', 
      photo: getImgText( 
        'https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png'
      ) 
    } 
  }, 
  { 
    x: 'Boult', 
    id: 'Osgemp3', 
    parent: 'Lead5', 
    attributes: { 
      role: 'OSG employee3', 
      photo: getImgText( 
        'https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png'
      ) 
    } 
  }, 
  { 
    x: 'Styne', 
    id: 'Osgemp4', 
    parent: 'Lead5', 
    attributes: { 
      role: 'OSG employee4', 
      photo: getImgText( 
        'https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png'
      ) 
    } 
  }, 
  { 
    x: 'George', 
    id: 'Osgemp5', 
    parent: 'Lead5', 
    attributes: { 
      role: 'OSG employee5', 
      photo: getImgText( 
        'https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png'
      ) 
    } 
  }, 
  { 
    x: 'Crist', 
    id: 'Osgemp6', 
    parent: 'Lead5', 
    attributes: { 
      role: 'OSG employee6', 
      photo: getImgText( 
        'https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png'
      ) 
    } 
  },    

  
]; 
  
var chart = JSC.chart('chartDiv1', { 
  debug: false, 
  type: 'organizational', 
  defaultTooltip_enabled: false, 
  
  /* These options will apply to all annotations including point nodes. */
  defaultAnnotation: { 
    padding: [5, 10], 
    margin: 6 
  }, 
  
  defaultSeries: { 
    color: normalFill, 
    /* Point selection is disabled because it is managed manually with point click events. */
    pointSelection: false
  }, 
  defaultPoint: { 
    focusGlow: false, 
    connectorLine: { 
      color: '#e0e0e0', 
      radius: [10, 3] 
    }, 
    label: { 
      text: 
        '%photo%name<br><span style="color:#9E9E9E">%role <br/> %email</span>', 
      style_color: 'black'
    }, 
    outline: { color: '#e0e0e0', width: 1 }, 
    annotation: { syncHeight_with: 'level' }, 
    states: { 
      mute: { 
        opacity: 0.8, 
        outline: { 
          color: mutedHighlightColor, 
          opacity: 0.9, 
          width: 2 
        } 
      }, 
      select: { 
        enabled: true, 
        outline: { 
          color: highlightColor, 
          width: 2 
        }, 
        color: selectedFill 
      }, 
      hover: { 
        outline: { 
          color: mutedHighlightColor, 
          width: 2 
        }, 
        color: mutedFill 
      } 
    }, 
    events: { 
      click: pointClick, 
      mouseOver: pointMouseOver, 
      mouseOut: pointMouseOut 
    } 
  }, 
  series: [{ points: points }] 
}); 
  
/** 
 * Event Handlers 
 */
  
function pointClick() { 
  var point = this, 
    chart = point.chart; 
  resetStyles(chart); 
  if (point.id === selectedPoint) { 
    selectedPoint = undefined; 
    return; 
  } 
  selectedPoint = point.id; 
  styleSelectedPoint(chart); 
} 
  
function pointMouseOver() { 
  var point = this, 
    chart = point.chart; 
  chart.connectors([point.id, 'up'], { 
    color: mutedHighlightColor, 
    width: 2 
  }); 
  chart 
    .series() 
    .points([point.id, 'up']) 
    .options({ muted: true }); 
} 
  
function pointMouseOut() { 
  var point = this, 
    chart = point.chart; 
  // Reset point and line styling. 
  resetStyles(chart); 
  // Style clicked points 
  styleSelectedPoint(chart); 
  return false; 
} 
  
/** 
 * Styling helper functions 
 */
  
function styleSelectedPoint(chart) { 
  if (selectedPoint) { 
    chart.connectors([selectedPoint, 'up'], { 
      color: highlightColor, 
      width: 2 
    }); 
    chart 
      .series() 
      .points([selectedPoint, 'up']) 
      .options({ selected: true, muted: false }); 
  } 
} 
  
/** 
 * Clears connectors and point states. 
 * @param chart Chart object 
 */
function resetStyles(chart) { 
  chart.connectors(); 
  chart 
    .series() 
    .points() 
    .options({ selected: false, muted: false }); 
} 
  
function getImgText(name) { 
  return ( 
    '<img width=50 height=50 align=center margin_bottom=4 margin_top=4 src=' + 
    name + 
    '><br>'
  ); 
} 

