// JS 
var selectedPoint; 
var highlightColor = '#5C6BC0', 
  mutedHighlightColor = '#9FA8DA', 
  mutedFill = '#f3f4fa', 
  selectedFill = '#E8EAF6', 
  normalFill = 'white'; 
  
var points = [ 
  { 
    x: 'Kaschif R. Israr', 
    id: 'Country Head', 
    attributes: { 
      role: 'Country Head', 
      photo: getImgText( 
        './assets/Color/1.png'
      ),
      email:'Kaschif@eurocentra.com.pk' 
    } 
  }, 
  { 
    x: 'Annika&nbsp;Schwaegerl', 
    id: 'SD Euro', 
    attributes: { 
      role: 'Sales&nbsp;Director&nbsp;Europe', 
      photo: getImgText( 
        './assets/Color/0.png'
      ),
      email:'annika_schwaegerl@eurocentra.com.hk' 
    } 
  },
  { 
    x: 'Business Team', 
    id: 'Business', 
    parent: 'Country Head', 
    attributes: { 
      role: '', 
      photo: getImgText( 
        './assets/team.png'
      ),
      email: '',
    } 
  }, 
  { 
    x: 'Technical Team', 
    id: 'Technical', 
    parent: 'Country Head', 
    attributes: { 
      role: '', 
      photo: getImgText( 
        './assets/team.png'
      ),
      email: ''
    } 
  }, 
  { 
    x: 'Services Team', 
    id: 'Services', 
    parent: 'Country Head', 
    attributes: { 
      role: '', 
      photo: getImgText( 
        './assets/team.png'
      ),
      email: ''
    } 
  }, 
  { 
    x: 'Supply Chain', 
    id: 'Supply', 
    parent: 'Country Head', 
    attributes: { 
      role: '', 
      photo: getImgText( 
        './assets/team.png'
      ),
      email: ''
    } 
  }, 
  { 
    x: 'Operational&nbsp;Support<br/>Group&nbsp;(OSG)', 
    id: 'OSG', 
    parent: 'Country Head', 
    attributes: { 
      role: '', 
      photo: getImgText( 
        './assets/team.png'
      ),
      email: ''
    } 
  }, 
  { 
    x: 'Rana&nbsp;Sohaib&nbsp;Mustafa', 
    id: 'Lead2', 
    parent: 'Technical', 
    attributes: { 
      role: 'Head&nbsp;of&nbsp;Product<br/>Development&nbsp;&&nbsp;Manufacturing', 
      photo: getImgText( 
        './assets/Color/2.png'
      ),
      email:'Sohaib@eurocentra.com.pk' 
    } 
  }, 
  { 
    x: 'Zahid&nbsp;Sajjad', 
    id: 'Zahid Sajjad', 
    parent: 'Services', 
    attributes: { 
      role: 'Head of Sustainability, <br/> Digital Innovation & Services', 
      photo: getImgText( 
        './assets/Color/3.png'
      ),
      email:'zahid@eurocentra.com.pk' 
    } 
  }, 
  { 
    x: 'Abdul Saboor', 
    id: 'Lead4', 
    parent: 'Supply', 
    attributes: { 
      role: 'Head of Supply Chain', 
      photo: getImgText( 
        './assets/Color/4.png'
      ),
      email:'abdul.saboor@eurocentra.com.pk' 
    } 
  }, 
  { 
    x: 'Madni&nbsp;Khan', 
    id: 'Lead5', 
    parent: 'OSG', 
    attributes: { 
      role: 'Manager&nbsp;Finance&nbsp;&<br/>Corporate Governance', 
      photo: getImgText( 
        './assets/Color/5.png'
      ),
      email:'Madni@eurocentra.com.pk' 
    } 
  },
  { 
    x: 'Umair&nbsp;Ahmed&nbsp;Siddiqui', 
    id: 'Busemp1', 
    parent: 'Business', 
    attributes: { 
      role: 'Division&nbsp;Head&nbsp;Bonprix&nbsp;-&nbsp;Knits', 
      photo: getImgText( 
        './assets/Color/15.png'
      ),
      email:'Umair@eurocentra.com.pk' 
    } 
  }, 
  { 
    x: 'Abdul&nbsp;Hafeez', 
    id: 'Busemp2', 
    parent: 'Business', 
    attributes: { 
      role: 'Division&nbsp;Head&nbsp;Bonprix-Woven', 
      photo: getImgText( 
        './assets/Color/17.png'
      ),
      email:'abdul.hafeez@eurocentra.com.pk' 
    } 
  }, 
  { 
    x: 'Muhammad&nbsp;Umar', 
    id: 'Busemp3', 
    parent: 'Business', 
    attributes: { 
      role: 'Division&nbsp;Head&nbsp;-&nbsp;Bonprix / Limango', 
      photo: getImgText( 
        './assets/Color/16.png'
      ),
      email:'Umer@eurocentra.com.pk' 
    } 
  }, 
  { 
    x: 'Kashif&nbsp;Younus', 
    id: 'Busemp4', 
    parent: 'Busemp1', 
    attributes: { 
      role: 'Deputy&nbsp;Merchandising&nbsp;Manager', 
      photo: getImgText( 
        './assets/Color/21.png'
      ),
      email:'Kashif.younus@eurocentra.com.pk' 
    } 
  }, 
  { 
    x: 'Syed&nbsp;Amir&nbsp;Abbas', 
    id: 'Busemp5', 
    parent: 'Busemp2', 
    attributes: { 
      role: 'Deputy&nbsp;Merchandising&nbsp;Manager', 
      photo: getImgText( 
        './assets/Color/22.png'
      ),
      email:'Aamir.abbas@eurocentra.com.pk' 
    } 
  },
  { 
    x: 'Product Development', 
    id: 'PD', 
    parent: 'Lead2', 
    attributes: { 
      role: '', 
      photo: '',
      email:''
    } 
  }, 
  { 
    x: '3D Product Innovation', 
    id: '3D', 
    parent: 'Lead2', 
    attributes: { 
      role: '', 
      photo: '',
      email:''
    } 
  }, 
  { 
    x: 'Quality Development', 
    id: 'QD', 
    parent: 'Lead2', 
    attributes: { 
      role: '', 
    photo: '',
      email:''
    } 
  }, 
  { 
    x: 'Textile Testing', 
    id: 'TT', 
    parent: 'Lead2', 
    attributes: { 
      role: '', 
    photo: '',
      email:''
    } 
  }, 
  { 
    x: 'WFP Audits', 
    id: 'WFP', 
    parent: 'Lead2', 
    attributes: { 
      role: '', 
      photo: '',
      email:''
    } 
  },
  { 
    x: 'Khizar Hayat', 
    id: 'Khizar Hayat', 
    parent: 'PD', 
    attributes: { 
      role: 'Technical Lead', 
      photo: getImgText( 
        './assets/Color/14.png'
      ),
      email:'khizar@eurocentra.com.pk'
    } 
  },
  { 
    x: 'Muhammad Zeeshan', 
    id: 'Muhammad Zeeshan', 
    parent: 'Khizar Hayat', 
    attributes: { 
      role: 'Technical Lead', 
      photo: getImgText( 
        './assets/Color/26.png'
      ),
      email:'M.zeeshan@eurocentra.com.pk'
    } 
  }, 
  { 
    x: 'Muhammad Tahreem', 
    id: 'Muhammad Tahreem', 
    parent: 'Muhammad Zeeshan', 
    attributes: { 
      role: 'Technical Lead', 
      photo: getImgText( 
        './assets/Color/23.png'
      ),
      email:'tehreem@eurocentra.com.pk'
    } 
  },  
  { 
    x: 'Imran Amjad', 
    id: 'Imran Amjad', 
    parent: '3D', 
    attributes: { 
      role: 'Team Lead 3D', 
      photo: getImgText( 
        './assets/Color/25.png'
      ),
      email:'imran.amjad@eurocentra.com.pk'
    } 
  }, 
  { 
    x: 'MUHAMMAD ASIM', 
    id: 'MUHAMMAD ASIM', 
    parent: 'QD', 
    attributes: { 
      role: 'Regional Quality Head', 
      photo: getImgText( 
        './assets/Color/13.png'
      ),
      email:'asim@eurocentra.com.pk'
    } 
  }, 
  { 
    x: 'Dania Jamil', 
    id: 'Dania Jamil', 
    parent: 'TT', 
    attributes: { 
      role: 'Testing Manager', 
      photo: getImgText( 
        './assets/Color/31.png'
      ),
      email:'dania@eurocentra.com.pk'
    } 
  },
  { 
    x: 'Muhammad Owais', 
    id: 'Muhammad Owais', 
    parent: 'Dania Jamil', 
    attributes: { 
      role: 'Laboratory Incharge', 
      photo: getImgText( 
        './assets/Color/30.png'
      ),
      email:''
    } 
  },  
  { 
    x: 'Ismail Khan', 
    id: 'Ismail Khan', 
    parent: 'WFP', 
    attributes: { 
      role: 'Manager, Chemical<br/>Management', 
      photo: getImgText( 
        './assets/Color/27.png'
      ),
      email:'ismail@eurocentra.com.pk'
    } 
  },
  { 
    x: 'Digitalization Asset<br/>Management (DAM)', 
    id: 'DAM', 
    parent: 'Zahid Sajjad', 
    attributes: { 
      role: '', 
      photo: '',
      email:''
    } 
  }, 
  { 
    x: 'Sustainability & CSR', 
    id: 'CSR', 
    parent: 'Zahid Sajjad', 
    attributes: { 
      role: '', 
      photo: '',
      email:''
    } 
  }, 
  { 
    x: 'Logistics', 
    id: 'Logistics', 
    parent: 'Zahid Sajjad', 
    attributes: { 
      role: '', 
      photo: '',
      email:''
    } 
  }, 
  { 
    x: 'Product Library', 
    id: 'PL', 
    parent: 'Zahid Sajjad', 
    attributes: { 
      role: '', 
      photo: '',
      email:''
    } 
  }, 
  { 
    x: 'Human Asset<br/>Management (HAM)', 
    id: 'HAM', 
    parent: 'Zahid Sajjad', 
    attributes: { 
      role: '', 
      photo: '',
      email:''
    } 
  },
  { 
    x: 'Muhammad Aamir', 
    id: 'Muhammad Aamir', 
    parent: 'DAM', 
    attributes: { 
      role: 'MIS Manager', 
      photo: getImgText( 
        './assets/Color/9.png'
      ), 
      email:'aamir@eurocentra.com.pk'
    } 
  },   
  { 
    x: 'Sadad Ali', 
    id: 'Sadad Ali', 
    parent: 'Muhammad Aamir', 
    attributes: { 
      role: 'MIS Executive', 
      photo: getImgText( 
        './assets/Color/19.png'
      ),
      email:'sadad@eurocentra.com.pk' 
    } 
  },   
  { 
    x: 'Muhammad Noman', 
    id: 'Muhammad Noman', 
    parent: 'Sadad Ali', 
    attributes: { 
      role: 'Excellence Manager', 
      photo: getImgText( 
        './assets/Color/8.png'
      ),
      email:'Noman@eurocentra.com.pk' 
    } 
  },   
  { 
    x: 'Ahmed Adeel', 
    id: 'Ahmed Adeel', 
    parent: 'CSR', 
    attributes: { 
      role: 'Sustainability Manager', 
      photo: getImgText( 
        './assets/Color/11.png'
      ),
      email:'ahmed.adeel@eurocentra.com.pk'
    } 
  },   
  { 
    x: 'Basit Ali', 
    id: 'Basit Ali', 
    parent: 'Ahmed Adeel', 
    attributes: { 
      role: 'CSR Executive', 
      photo: getImgText( 
        './assets/Color/18.png'
      ),
      email:'Basit.ali@eurocentra.com.pk' 
    } 
  },
  { 
    x: 'Jameel Ahmed', 
    id: 'Jameel Ahmed', 
    parent: 'Basit Ali', 
    attributes: { 
      role: 'Project Manager', 
      photo: getImgText( 
        './assets/Color/10.png'
      ),
      email:'Jameel@eurocentra.com.pk' 
    } 
  }, 
  { 
    x: 'Grephen Almas', 
    id: 'Grephen Almas', 
    parent: 'Logistics', 
    attributes: { 
      role: 'Logistics Manager', 
      photo: getImgText( 
        './assets/Color/12.png'
      ),
      email:'grephen@eurocentra.com.pk' 
    } 
  }, 
  { 
    x: 'Mehreen Idrees', 
    id: 'Mehreen Idrees', 
    parent: 'Grephen Almas', 
    attributes: { 
      role: 'Assisstant Logistics Manager', 
      photo: getImgText( 
        './assets/Color/20.png'
      ),
      email:'Mehreen@eurocentra.com.pk' 
    } 
  }, 
  { 
    x: 'Sikandar Solangi', 
    id: 'Sikandar Solangi', 
    parent: 'PL', 
    attributes: { 
      role: 'Librarian', 
      photo: getImgText( 
        './assets/Color/00.png'
      ),
      email:'' 
    } 
  }, 
  { 
    x: 'TBH', 
    id: 'TBH', 
    parent: 'HAM', 
    attributes: { 
      role: 'Talent Acquisition Specialist', 
      photo: getImgText( 
        './assets/Color/00.png'
      ),
      email:'' 
    } 
  }, 
  { 
    x: 'Muhammad Safwan Khan', 
    id: 'Muhammad Safwan Khan', 
    parent: 'TBH', 
    attributes: { 
      role: 'Working Student', 
      photo: getImgText( 
        './assets/Color/6.png'
      ),
      email:'hr@eurocentra.com.pk' 
    } 
  },
  { 
    x: 'Sajjad Hussain', 
    id: 'Sajjad Hussain', 
    parent: 'Lead5', 
    attributes: { 
      role: 'IT & Communication Manager', 
      photo: getImgText( 
        './assets/Color/56.png'
      ),
      email:'it@eurocentra.com.pk' 
    } 
  },
  { 
    x: 'Abdul Manan', 
    id: 'Abdul Manan', 
    parent: 'Sajjad Hussain', 
    attributes: { 
      role: 'Facility Services Manager', 
      photo: getImgText( 
        './assets/Color/57.png'
      ),
      email:'abdulmanan@eurocentra.com.pk' 
    } 
  },
  { 
    x: 'Pervez Ahmed', 
    id: 'Pervez Ahmed', 
    parent: 'Abdul Manan', 
    attributes: { 
      role: 'Front Desk officer', 
      photo: getImgText( 
        './assets/Color/55.png'
      ),
      email:'pervez@eurocentra.com.pk' 
    } 
  },
  { 
    x: 'Naeem', 
    id: 'Naeem', 
    parent: 'Pervez Ahmed', 
    attributes: { 
      role: 'Facility Officer', 
      photo: getImgText( 
        './assets/Color/54.png'
      ),
      email:'' 
    } 
  },
  { 
    x: 'Javaid', 
    id: 'Javaid', 
    parent: 'Naeem', 
    attributes: { 
      role: 'Chauffeur', 
      photo: getImgText( 
        './assets/Color/53.png'
      ),
      email:'' 
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
  annotations: [ 
    { 
      position: 'bottom', 
      label_text: 
        'Powered by Interactive Technologies Gateway.'
    } 
  ],
  
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
        '%photo <b>%name</b><br><span style="color:#9E9E9E">%role</span><br/> %email', 
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
    '<img width=80 height=80 align=center margin_bottom=4 margin_top=4 src=' + 
    name + 
    '><br>'
  ); 
} 

