export interface Styles {
    global:    Global;
    $themes:   any[];
    $metadata: Metadata;
}

export interface Metadata {
    tokenSetOrder: string[];
}

export interface Global {
    "s-color-00FFB2":   SColor00FFB2;
    alerta:             Alerta;
    desabilitado:       Alerta;
    "button-font":      { [key: string]: Alerta };
    letterSpacing:      LetterSpacing;
    paragraphSpacing:   LetterSpacing;
    textCase:           Text;
    textDecoration:     Text;
    paragraphIndent:    LetterSpacing;
    "s-border-default": Alerta;
    "s-border-medium":  Alerta;
    "s-border-big":     Alerta;
    lineHeights:        LetterSpacing;
    fontWeights:        FontWeights;
}

export interface Alerta {
    value: string;
    type:  string;
}

export interface FontWeights {
    "inter-0": Alerta;
}

export interface LetterSpacing {
    "0": Alerta;
}

export interface SColor00FFB2 {
    value:       string;
    type:        string;
    description: string;
}

export interface Text {
    none: Alerta;
}
